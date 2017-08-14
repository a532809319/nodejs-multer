var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()
var storageZip = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/zip')        //文件存储路径
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.zip')    //对文件重新命名，防止文件名冲突
    }
})

var uploadZip = multer({
    storage: storageZip
});
app.post('/webgl/upload/zip', uploadZip.single('file'), function(req, res) {
    res.json(req.file)
})
app.get('/',function (req,res) {
    res.render()
})
app.listen(3001)