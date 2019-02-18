import { connection } from './Connection';

function query(query) {
    connection.connect((err) => {
        if (err) throw err;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log(result)
        })
    });
}
