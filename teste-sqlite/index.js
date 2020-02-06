const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        return console.error(err.message)
    }
    console.log('Conectado com sqlite3!')
})

db.serialize(() => {
    db.each(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    });
  });

db.close((err) => {
    if(err){
        return console.error(err.message)
    }
    console.log('Encerrando com sqlite3!')
})
