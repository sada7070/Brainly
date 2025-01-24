export function generate(len: number) {
    const options = "abcdefghijklmnopqrstuvwxyz1234567890";
    const lenght = options.length;
    let ans = "";

    for(let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * lenght);           // 0 to 36(random number of options)
        ans += options[index];   
    }
    return(ans);
}