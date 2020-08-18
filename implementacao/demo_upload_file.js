var http = require('http');
var formidable = require('formidable');
var fs = require('fs')

http.createServer(function (req, res)  {
    if(req.url == '/fileupload'){
        var form = formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            console.log(files);
            console.log(files.fileupload);
            var oldpath = files.fileupload.path;
            var newpath = 'C:/desenvolvimento/' + files.fileupload.name;
            fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"> <br>');
        res.write('<input type="submit"> ');
        res.write('</form>');
        return res.end();
    }
}).listen(80);