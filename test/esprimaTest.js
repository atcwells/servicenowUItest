
var syntax = TESM_NG_EsprimaUtils.parse('var answer = 42');
var versions = [];
if (syntax && syntax.body) {
    for (var key in syntax.body) {
        var statement = syntax.body[key];
        if (statement.type == 'VariableDeclaration') {
            var rawVersions = statement.declarations[0].init.properties
            for (var versionKey in rawVersions) {
                var rawVersion = rawVersions[versionKey];
                if(rawVersion.type == 'Property') {
                    versions.push(rawVersion.key.name);
                }
            }
        }
    }
}

var getFunctions = function() {

}

var obj = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "opsd2api"
                    },
                    "init": {
                        "type": "ObjectExpression",
                        "properties": [
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "latest"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": "v2",
                                    "raw": "'v2'"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "stable"
                                },
                                "computed": false,
                                "value": {
                                    "type": "Literal",
                                    "value": "v1",
                                    "raw": "'v1'"
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "v1"
                                },
                                "computed": false,
                                "value": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                        {
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "test"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "d"
                                                    }
                                                ],
                                                "defaults": [],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "+",
                                                                    "left": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "+",
                                                                        "left": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                                "type": "BinaryExpression",
                                                                                "operator": "+",
                                                                                "left": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "+",
                                                                                    "left": {
                                                                                        "type": "MemberExpression",
                                                                                        "computed": false,
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "name": "obj"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "name": "a"
                                                                                        }
                                                                                    },
                                                                                    "right": {
                                                                                        "type": "Literal",
                                                                                        "value": ", ",
                                                                                        "raw": "', '"
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": false,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "obj"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "name": "b"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": ", ",
                                                                                "raw": "', '"
                                                                            }
                                                                        },
                                                                        "right": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "obj"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "c"
                                                                            }
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "Literal",
                                                                        "value": ", ",
                                                                        "raw": "', '"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "obj"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "d"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        },
                                        {
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "test2"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "obj"
                                                    }
                                                ],
                                                "defaults": [],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "+",
                                                                    "left": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "+",
                                                                        "left": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                                "type": "BinaryExpression",
                                                                                "operator": "+",
                                                                                "left": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "+",
                                                                                    "left": {
                                                                                        "type": "MemberExpression",
                                                                                        "computed": false,
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "name": "obj"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "name": "a"
                                                                                        }
                                                                                    },
                                                                                    "right": {
                                                                                        "type": "Literal",
                                                                                        "value": ", ",
                                                                                        "raw": "', '"
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": false,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "obj"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "name": "b"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": ", ",
                                                                                "raw": "', '"
                                                                            }
                                                                        },
                                                                        "right": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "obj"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "c"
                                                                            }
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "Literal",
                                                                        "value": ", ",
                                                                        "raw": "', '"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "obj"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "d"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        },
                                        {
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "test3"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "obj"
                                                    }
                                                ],
                                                "defaults": [],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "+",
                                                                    "left": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "+",
                                                                        "left": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                                "type": "BinaryExpression",
                                                                                "operator": "+",
                                                                                "left": {
                                                                                    "type": "BinaryExpression",
                                                                                    "operator": "+",
                                                                                    "left": {
                                                                                        "type": "MemberExpression",
                                                                                        "computed": false,
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "name": "obj"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "name": "a"
                                                                                        }
                                                                                    },
                                                                                    "right": {
                                                                                        "type": "Literal",
                                                                                        "value": ", ",
                                                                                        "raw": "', '"
                                                                                    }
                                                                                },
                                                                                "right": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": false,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "obj"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "name": "b"
                                                                                    }
                                                                                }
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": ", ",
                                                                                "raw": "', '"
                                                                            }
                                                                        },
                                                                        "right": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "obj"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "c"
                                                                            }
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "Literal",
                                                                        "value": ", ",
                                                                        "raw": "', '"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "obj"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "d"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        }
                                    ]
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "v2"
                                },
                                "computed": false,
                                "value": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                        {
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "test"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                ],
                                                "defaults": [],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "+",
                                                                    "left": {
                                                                        "type": "BinaryExpression",
                                                                        "operator": "+",
                                                                        "left": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "+",
                                                                            "left": {
                                                                                "type": "Identifier",
                                                                                "name": "a"
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": ", ",
                                                                                "raw": "', '"
                                                                            }
                                                                        },
                                                                        "right": {
                                                                            "type": "Identifier",
                                                                            "name": "b"
                                                                        }
                                                                    },
                                                                    "right": {
                                                                        "type": "Literal",
                                                                        "value": ", ",
                                                                        "raw": "', '"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "Identifier",
                                                                    "name": "c"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        }
                                    ]
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "v3"
                                },
                                "computed": false,
                                "value": {
                                    "type": "ObjectExpression",
                                    "properties": [
                                        {
                                            "type": "Property",
                                            "key": {
                                                "type": "Identifier",
                                                "name": "test"
                                            },
                                            "computed": false,
                                            "value": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [
                                                    {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    }
                                                ],
                                                "defaults": [],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "BinaryExpression",
                                                                "operator": "+",
                                                                "left": {
                                                                    "type": "BinaryExpression",
                                                                    "operator": "+",
                                                                    "left": {
                                                                        "type": "Identifier",
                                                                        "name": "a"
                                                                    },
                                                                    "right": {
                                                                        "type": "Literal",
                                                                        "value": ", ",
                                                                        "raw": "', '"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "Identifier",
                                                                    "name": "b"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                "generator": false,
                                                "expression": false
                                            },
                                            "kind": "init",
                                            "method": false,
                                            "shorthand": false
                                        }
                                    ]
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false
                            }
                        ]
                    }
                }
            ],
            "kind": "var"
        }
    ],
    "sourceType": "script"
}