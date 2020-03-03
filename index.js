//笔记：36.JavaScript Objects
//learn link:https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781
var recipes={};//define a recipes object

//returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value){
var newObj = Object.assign({},object);
//does not modify the original object, but rather returns a clone with the new data
newObj[key]=value;
return newObj;//returns an object with an updated key value pair
}

//updates `object` with the given `key` and `value` (it is destructive) and
//returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}

//deletes `key` from a clone of object and returns the new object (it is non-destructive)
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object);
  delete newObj[key];
  return newObj;
}

//returns object without the delete key/value pair
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];// modifies the original object
  return object;//returns object without the delete key/value pair
}
