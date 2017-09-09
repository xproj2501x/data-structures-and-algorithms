/**
 * Data Structures - Binary Tree
 * ===
 *
 * @module binaryTree
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import BinaryNode from './binary-node';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class BinaryTree {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _root;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(data){
    this._root = data ? this.insert(data) : null;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  insert(data){
    let node = data instanceof BinaryNode ? data : new BinaryNode(data);
    if(!this._root){
      this._root = node;
    } else {
      let current = this._root;
      while(true){
        if(current.data){
          if(!current.left){
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  //traverse(node, queue){
  //  node = node ? node : this._root;
  //  queue = queue ? queue : [];
  //
  //  if(node._left){
  //    this.traverse(node.left, queue);
  //  }
  //  if(node._right){
  //    this.traverse(node.right, queue);
  //  }
  //  if(!node._left && !node._right){
  //      queue.push(node.data);
  //  }
  //
  //  return queue;
  //}

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default BinaryTree;