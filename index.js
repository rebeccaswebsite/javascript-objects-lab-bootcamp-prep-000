var recipes = {}; 

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    Object.assign({}, obj, { [key]: value });
  return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '2 cups');