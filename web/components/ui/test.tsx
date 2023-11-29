type TypeName = true | false;

type ObjectType<T> = T extends true
    ? string[]
    : T extends false
    ? string
    : never;

function getItems<T extends true | false>(type: T): ObjectType<T> {
    if (type) return [''] as ObjectType<T>;
    else return [''] as ObjectType<T>;
}

const circles = getItems(true);

interface vlxx {
    isVLXX: isVL;
    onChange: <T extends true | false>(type: T) => void;
}

type vl = true | false;

type isVL = true | false;
