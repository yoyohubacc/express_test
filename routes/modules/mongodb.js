const mc = require('mongodb').MongoClient;

const uriA="mongodb://admin_yoyodb:EBPT4c7V3vDKNarVU5Z7b5BKP@192.168.219.106:27014/admin?authSource=admin"
const uriU="mongodb://yoyodb_user:A9UDTLN5HA@192.168.219.106:27014/yoyodb?authSource=yoyodb"
const uriDT="mongodb://yoyodb_dev:U6Y3T5LDOU7MOYH@192.168.219.106:27014/yoyodb_temp?authSource=yoyodb_temp"
const uriD="mongodb://yoyodb_dev:U6Y3T5LDOU7MOYH@192.168.219.106:27014/yoyodb?authSource=yoyodb"

const uriRead="mongodb://yoyodb_user:A9UDTLN5HA@192.168.219.106:27014/yoyodb_admin?authSource=yoyodb_admin"
const uriRW="mongodb://yoyodb_dev:U6Y3T5LDOU7MOYH@192.168.219.106:27014/yoyodb_admin?authSource=yoyodb_admin"

// db.users.insert({"identity":"user1","password":"user1"})

const mcOp = { useNewUrlParser: true,useUnifiedTopology: true }
// info_ch_d
// info_en_d
// info_kr_d
// markets_d
// price_d
// shipfee_d
// test

module.exports = class {
  constructor(uri){
    switch(uri){
      case 'user': this.uri = uriU; break;
      case 'dev': this.uri = uriDT; break;
      case 'deUser': this.uri = uriD; break;
      case 'admin': this.uri = uriA; break;
      case 'login': this.uri = uriRead; break;
      case 'regist': this.uri = uriRW; break;
      default: return 'not found'
    }
  }
  listCol(cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().listCollections().toArray((e,lc)=>{
        cb(e,lc);
        db.close();
      })
    })
  }
  find(col,fObj,fopt,cb){
    fopt.sort == undefined ?fopt.sort=0:fopt.sort;
    fopt.skip == undefined ?fopt.skip=0:fopt.skip;
    fopt.limit == undefined ?fopt.limit=0:fopt.limit;
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).find(fObj).sort(fopt.sort).skip(fopt.skip).limit(fopt.limit).toArray((err,frst)=>{
        cb(err,frst);
        db.close();
      })
    })
  }
  
  findOne(col,foObj,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).findOne(foObj,(err,forst)=>{
        cb(err,forst);
        db.close();
      })
    })
  }
  deleteMany(col,deAry,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).deleteMany(deary,(err,dmrst)=>{
        cb(err,dmrst);
        db.close();
      })
    })
  }
  deleteOne(col,dObj,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).deleteOne(dObj,(err,drst)=>{
        cb(err,drst);
        db.close();
      })
    })
  }
  insertMany(col,imAry,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).insertMany(imAry,(err,imrst)=>{
        cb(err,imrst);
        db.close();
      })
    })
  }
  insertOne(col,ioObj,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).insertOne(ioObj,(err,iorst)=>{
        cb(err,iorst);
        db.close();
      })
    })
  }
  updateMany(col,umObj,updObj,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).insertMany(umObj,updObj,(err,umrst)=>{
        cb(err,umrst);
        db.close();
      })
    })
  }
  updateOne(col,uoObj,updObj,cb){
    mc.connect(this.uri,mcOp, (err, db) => {
      if (err) throw err
      db.db().collection(col).updateOne(ioObj,upd,(err,iorst)=>{
        console.log(iorst.result.ok);
      })
    })
  }
}