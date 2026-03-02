async function check() {
    const text = 'èoî≈ìπòHîNä”';
    const chars = new Set(text.split(''));
    for (const c of chars) {
        const encoded = encodeURIComponent(c);
        let res = await fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data-jp@0/${encoded}.json`);
        console.log(c, 'jp:', res.status);
        res = await fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encoded}.json`);
        console.log(c, 'cn-simp:', res.status);
        res = await fetch(`https://cdn.jsdelivr.net/gh/chanind/hanzi-writer-data-jp@master/data/${encoded}.json`);
        console.log(c, 'gh-jp:', res.status);
        res = await fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data-traditional@2.0.1/${encoded}.json`);
        console.log(c, 'cn-trad:', res.status);
    }
}
check();
