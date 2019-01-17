function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value });
}
 
const recipes = { eggs: 1 };
 
updateObjectWithKeyAndValue(recipes, 'chocolate', '1 cup');

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    Object.assign({}, obj, { [key]: value });
  return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '2 cups');