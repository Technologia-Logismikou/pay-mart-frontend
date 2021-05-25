export interface TreeNodeInterface {
    key: string;
    name: string;
    level?: number;
    expand?: boolean;
    children?: TreeNodeInterface[];
    parent?: TreeNodeInterface;
}

export function collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if (!$event) {
        if (data.children) {
            data.children.forEach((d) => {
                const target = array.find((a) => a.key === d.key)!;
                target.expand = false;
                collapse(array, target, false);
            });
        } else {
            return;
        }
    }
}

export function categoriesToListOfMapData(categories: any[], level?: string): any[] {
    for (let i = 0; i < categories.length; i++) {
        categories[i]['key'] = level ? `${level}-${i + 1}` : `${i + 1}`;
        if (categories[i].children) {
            categories[i].children = categoriesToListOfMapData(
                categories[i].children,
                level ? `${level}-${i + 1}` : `${i + 1}`
            );
        }
    }

    return categories;
}

export function convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
        const node = stack.pop()!;
        visitNode(node, hashMap, array);
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
            }
        }
    }

    return array;
}

export function visitNode(
    node: TreeNodeInterface,
    hashMap: { [key: string]: boolean },
    array: TreeNodeInterface[]
): void {
    if (!hashMap[node.key]) {
        hashMap[node.key] = true;
        array.push(node);
    }
}
