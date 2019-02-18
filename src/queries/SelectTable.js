import { connection } from './Connection';

connection.connect((err) => {
    if (err)
        throw err
    else
        connection.query("SELECT * FROM students", (err, result) => {
            if (err)
                throw err
            else
                console.log(result)
        })
})
