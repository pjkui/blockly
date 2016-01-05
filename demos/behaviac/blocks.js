/**
 *
 *     @author QuinnPan<quinnpan@tencent.com>
 *     @date 2016年1月5日11:49:28
 *     @description This File to register blocks for behaviac editor
 */


Blockly.Blocks['action'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("动作")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};