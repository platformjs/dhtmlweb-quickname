function isEmpty(obj) {
    for(let p in obj) {
        return false;
    }
    return true;
}
function namespace(obj, result, space) {
    if (result.length === 0) {
        result.push("{");
    }
    const newSpace = space + "  ";
    for (let p in obj) {
        if (typeof obj[p] === "string") {
            result.push(newSpace + p + ",");
        } else {
            result.push(newSpace + p + ": {");
            namespace(obj[p], result, newSpace + "  ");
            result[result.length - 1] += ",";
        }
    }
    result.push(space + "}");
}

function quickname(paths, excludePrefix) {
    const obj = {};
    let importStr = [];
    paths.forEach(path => {
        let pathNames = path.split("/");
        //get rid of .js at the end
        const name = pathNames.join("").split(".").join("");
        importStr.push(`import ${name} from "${path}";`);
        

        path = path.substr(excludePrefix.length || 0);
        pathNames = path.split("/");
        pathNames.pop();
        let current = obj;
        pathNames.forEach(p => {
            if (!current[p]) {
                current[p] = {};
            }
            current = current[p];
        });
        current[name] = name;
    });
    const result = [];
    namespace(obj, result, "");
    return importStr.join("\n") + "\nexport default\n " + result.join("\n");
}

module.exports = quickname;