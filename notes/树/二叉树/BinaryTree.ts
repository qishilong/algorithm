/**
 * 1. 二叉树的前中后序遍历
 * 2. 根据 前中， 中后序遍历还原二叉树
 */

class TreeNode {
    value: number | string | any;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value?: number | string | any, left?: TreeNode | null, right?: TreeNode | null) {
        this.value = (value === undefined ? 0 : value);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BinaryTree {

    // 前序遍历
    preorderTraversal(treeNode: TreeNode): unknown[] | null {
        if (treeNode === null) {
            return null;
        };
        const result: unknown[] = [];
        result.push(treeNode.value);
        this.preorderTraversal(treeNode.left as TreeNode);
        this.preorderTraversal(treeNode.right as TreeNode);
        return result;
    }

    // 中序遍历
    inorderTraversal(treeNode: TreeNode): unknown[] | null {
        if (treeNode === null) {
            return null;
        };
        const result: unknown[] = [];
        this.inorderTraversal(treeNode.left as TreeNode);
        result.push(treeNode.value);
        this.inorderTraversal(treeNode.right as TreeNode);
        return result;
    }

    // 后序遍历
    postorderTraversal(treeNode: TreeNode): unknown[] | null {
        if (treeNode === null) {
            return null;
        };
        const result: unknown[] = [];
        this.postorderTraversal(treeNode.left as TreeNode);
        this.postorderTraversal(treeNode.right as TreeNode);
        result.push(treeNode.value);
        return result;
    };

    // 前序遍历和中序遍历的结果 返回二叉树
    frontAndCenterCreateBinaryTree(front: string[] | number[] | any[], center: string[] | number[] | any[]): TreeNode | null {
        if (front === null || center === null || front.length === 0 || center.length === 0 || front.length !== center.length) {
            return null;
        }
        const head = new TreeNode(front[0]);
        const index = center.indexOf(front[0]);
        const frontLeft = front.slice(1, index + 1);
        const frontRight = front.slice(index + 1, front.length);
        const centerLeft = center.slice(0, index);
        const centerRight = center.slice(index + 1, center.length);
        head.left = this.frontAndCenterCreateBinaryTree(frontLeft, centerLeft);
        head.right = this.frontAndCenterCreateBinaryTree(frontRight, centerRight);

        return head;
    };

    // 中序遍历和后序遍历的结果 返回二叉树
    centerAndAfterCreateBinaryTree(center: string[] | number[] | any[], after: string[] | number[] | any[]): TreeNode | null {
        if (center === null || after === null || center.length === 0 || after.length === 0 || center.length !== after.length) {
            return null;
        }
        const headValueIndex = after.length - 1;
        const head = new TreeNode(after[headValueIndex]);
        const index = center.indexOf(after[headValueIndex]);
        const centerLeft = center.slice(0, index);
        const centerRight = center.slice(index + 1, center.length);
        const afterLeft = after.slice(0, index);
        const afterRight = after.slice(index, after.length - 1);
        head.left = this.centerAndAfterCreateBinaryTree(centerLeft, afterLeft);
        head.right = this.centerAndAfterCreateBinaryTree(centerRight, afterRight);
        return head;
    };
}

// const binaryTree = new BinaryTree();
// const center = ["d", "b", "e", "a", "f", "c", "g"];
// const after = ["d", "e", "b", "f", "g", "c", "a"];
// const resultValue1 = binaryTree.centerAndAfterCreateBinaryTree(center, after);
// const front = ["a", "b", "d", "e", "c", "f", "g"];
// const center1 = ["d", "b", "e", "a", "f", "c", "g"];
// const resultValue2 = binaryTree.frontAndCenterCreateBinaryTree(front, center1);
// console.log(resultValue1);
// console.log(resultValue2);