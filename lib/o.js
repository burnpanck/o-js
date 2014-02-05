module.exports = {
    Class:     require('./o-Class.js'),
    Trait:     require('./o-Trait.js'),
    Attribute: require('./o-Attribute.js'),
    Type:      require('./o-Type.js'),

    classType:     require('./o-classType.js'),
    traitType:     require('./o-traitType.js'),
    attributeType: require('./o-attributeType.js'),
    typeType:      require('./o-typeType.js'),

    AllType:        require('./o-AllType.js'),
    AnyType:        require('./o-AnyType.js'),
    ArrayOfType:    require('./o-ArrayOfType.js'),
    DuckType:       require('./o-DuckType.js'),
    EnumType:       require('./o-EnumType.js'),
    EqualType:      require('./o-EqualType.js'),
    InstanceOfType: require('./o-InstanceOfType.js'),
    NoneType:       require('./o-NoneType.js'),
    NotType:        require('./o-NotType.js'),
    ObjectOfType:   require('./o-ObjectOfType.js'),
    PatternType:    require('./o-PatternType.js'),
    TypeOfType:     require('./o-TypeOfType.js'),

    arrayType:          require('./o-arrayType.js'),
    booleanType:        require('./o-booleanType.js'),
    dateType:           require('./o-dateType.js'),
    definedType:        require('./o-definedType.js'),
    functionType:       require('./o-functionType.js'),
    integerType:        require('./o-integerType.js'),
    negativeType:       require('./o-negativeType.js'),
    nonEmptyStringType: require('./o-nonEmptyStringType.js'),
    nonZeroType:        require('./o-nonZeroType.js'),
    nullType:           require('./o-nullType.js'),
    numberType:         require('./o-numberType.js'),
    objectType:         require('./o-objectType.js'),
    positiveIntType:    require('./o-positiveIntType.js'),
    positiveType:       require('./o-positiveType.js'),
    regExpType:         require('./o-regExpType.js'),
    simpleObjectType:   require('./o-simpleObjectType.js'),
    stringType:         require('./o-stringType.js'),
    undefinedType:      require('./o-undefinedType.js'),

    around: require('./o-around.js'),
    before: require('./o-before.js'),
    after:  require('./o-after.js'),

    reader:    require('./o-reader.js'),
    writer:    require('./o-writer.js'),
    accessor:  require('./o-accessor.js'),
    clearer:   require('./o-clearer.js'),
    predicate: require('./o-predicate.js'),
    proxy:     require('./o-proxy.js'),

    augment:   require('./o-augment.js'),
    clone:     require('./o-clone.js'),
    construct: require('./o-construct.js'),
    has:       require('./o-has.js'),
    local:     require('./o-local.js'),
    merge:     require('./o-merge.js'),
    ucFirst:   require('./o-ucFirst.js')
};