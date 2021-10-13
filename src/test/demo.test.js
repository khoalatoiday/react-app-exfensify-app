const generateGreeting =(name) => `Hello ${name}`

// API: test(), expect(), toBe()
test('Should print correct', ()=>{
    const result = generateGreeting("Khoa")
    expect(result).toBe("Hello Khoa")
})