const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.Tree;
  }
  root() {
      if (!this.Tree) {
          return null;
      }
      return this.Tree;
  }
  add(data) {
      if (!this.Tree) {
          this.Tree = new Node(data);
      } else {
          let k = true;
          let tree = this.Tree;
          while (k) {
              if (data < tree.data) {
                  if (tree.left) {
                      tree = tree.left;
                  } else {
                      k = false;
                      tree.left = new Node(data);
                  }
              } else if (data > tree.data) {
                  if (tree.right) {
                      tree = tree.right;
                  } else {
                      k = false;
                      tree.right = new Node(data);
                  }
              }
          }
      }
  }
  has(data) {
      let k = true;
      let tree = this.Tree;
      while (k) {
          if (data == tree.data) {
              return true;
          } else if (data < tree.data) {
              if (tree.left) {
                  tree = tree.left;
              } else {
                  return false;
              }
          } else if (data > tree.data) {
              if (tree.right) {
                  tree = tree.right;
              } else {
                  return false;
              }
          }
      }
  }
  find(data) {
      let k = true;
      let tree = this.Tree;
      while (k) {
          if (data == tree.data) {
              return tree;
          } else if (data < tree.data) {
              if (tree.left) {
                  tree = tree.left;
              } else {
                  return null;
              }
          } else if (data > tree.data) {
              if (tree.right) {
                  tree = tree.right;
              } else {
                  return null;
              }
          }
      }
  }
  remove(data) {
      let fin = this.find(data);
      if(!fin){
      } else {
          let res = this.returnElementAndParent(data)
          console.log(res);
          let tree = res[0];
          let parent = res[1];
          this.removeNode(parent,tree);
          if(tree.right && tree.left){
              let min = this.min(tree.right);
              let res2 = this.returnElementAndParent(min);
              let tree2 = res2[0];
              let parent2 = res2[1];
              tree.data = min;
              this.removeNode(parent2,tree2);
          }
      }
  }
  min(tree) {
      if(!tree){
          tree = this.Tree;
      }
      if(!tree){
          return null;
      }
      while (tree.left) {
          tree = tree.left;
      }
      return tree.data;
  }
  max() {
      let tree = this.Tree;
      if(!tree){
          return null;
      }
      while (tree.right) {
          tree = tree.right;
      }
      return tree.data;
  }
  returnElementAndParent(data){
      let result = [];
      let k = true;
      let parentBool = true;
      let parent = this.Tree;
      let tree = this.Tree;
      while (k) {
          if (data == tree.data) {
              result.push(tree);
              result.push(parent);
              return result;
          } else if (data < tree.data) {
              if (tree.left) {
                  if(!parentBool){
                      parent = tree;
                  }
                  parentBool = false;
                  tree = tree.left;
              }
          } else if (data > tree.data) {
              if (tree.right) {
                  if(!parentBool){
                      parent = tree;
                  }
                  parentBool = false;
                  tree = tree.right;
              }
          }
      }

  }
  removeNode(parent,tree){
      if(!tree.left && ! tree.right){
          if(parent.left == tree){
              parent.left = null;
          }
          if(parent.right == tree){
              parent.right = null;
          }
      }
      if(tree.right && !tree.left){
          if(parent.left == tree){
              parent.left = tree.right;
          }
          if(parent.right == tree){
              parent.right = tree.right;
          }
      }
      if(!tree.right && tree.left){
          if(parent.left == tree){
              parent.left = tree.left;
          }
          if(parent.right == tree){
              parent.right = tree.left;
          }
      }
  }
}

module.exports = {
  BinarySearchTree
};