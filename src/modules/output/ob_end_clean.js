/* 
* @author Niklas von Hertzen <niklas at hertzen.com>
* @created 10.7.2012 
* @website http://hertzen.com
 */


PHP.Modules.prototype.ob_end_clean = function() {
    this[ PHP.Compiler.prototype.OUTPUT_BUFFERS ].pop();
    return new PHP.VM.Variable();
};