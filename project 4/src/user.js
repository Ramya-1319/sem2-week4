// Sign Up
async function signUp(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return User.create({ ...userData, password: hashedPassword });
}

// Login
async function login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
        return { token };
    }
    throw new Error('Invalid credentials');
}
