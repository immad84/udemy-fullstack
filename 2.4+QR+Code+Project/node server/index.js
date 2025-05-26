import http from 'http'
import url from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
    console.log(url)
    res.end()
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 