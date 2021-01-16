const getHash = () => {
    const hash = location.hash.slice(1).toLowerCase().split('/')[1] || '/'
    console.log(hash);
    return hash
}

export default getHash