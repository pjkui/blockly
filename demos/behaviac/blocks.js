/**
 *
 *     @author QuinnPan<quinnpan@tencent.com>
 *     @date 2016年1月5日11:49:28
 *     @description This File to register blocks for behaviac editor
 */

Blockly.Blocks['agent'] = {
    init: function () {
        this.appendStatementInput("nodes")
            .appendField(new Blockly.FieldDropdown([["agent1", "agent1"], ["agent2", "agent2"], ["agent3", "agent3"]]), "agentType");
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//add  preAction
Blockly.Blocks['preaction_topdown'] = {
    init: function () {
        this.appendValueInput("action")
            .setCheck("Boolean")
            .appendField("PreAction");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true, "Boolean");
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['preaction_left'] = {
    init: function () {
        this.appendValueInput("action")
            .setCheck("Boolean")
            .appendField("PreAction");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//add postaction
Blockly.Blocks['postaction_topdown'] = {
    init: function () {
        this.appendValueInput("action")
            .setCheck("Boolean")
            .appendField("PostAction");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true, "Boolean");
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['postaction_left'] = {
    init: function () {
        this.appendValueInput("action")
            .setCheck("Boolean")
            .appendField("PostAction");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['action_topdown'] = {
    init: function () {
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
Blockly.Blocks['action_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("动作")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "NAME");
        this.setInputsInline(false);
        this.setOutput(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Noop
Blockly.Blocks['noop_topdown'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Noop");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['noop_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Noop");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Wait
Blockly.Blocks['wait_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait")
            .appendField(new Blockly.FieldTextInput("100"), "times")
            .appendField(":")
            .appendField(new Blockly.FieldDropdown([["毫秒", "time"], ["帧", "frame"]]), "property");
        this.appendStatementInput("actions");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(100);
    }
};
Blockly.Blocks['wait_topdown'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait")
            .appendField(new Blockly.FieldTextInput("100"), "times")
            .appendField(":")
            .appendField(new Blockly.FieldDropdown([["毫秒", "time"], ["帧", "frame"]]), "property");
        this.appendStatementInput("actions");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(100);
    }
};
//Parallel
Blockly.Blocks['selector_topdown'] = {
    init: function () {
        this.appendStatementInput("actions")
            .appendField(new Blockly.FieldDropdown([["Selector", "0"], ["SelectorStochastic", "1"], ["SelectorProbability", "2"]]), "type");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('hello');
        this.setHelpUrl('http://www.example.com/');
    }
};

//Sequence
Blockly.Blocks['sequence_topdown'] = {
    init: function () {
        this.appendStatementInput("actions")
            .appendField(new Blockly.FieldDropdown([["Sequence", "0"], ["SequenceStochastic", "1"]]), "type");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Parallel
Blockly.Blocks['parallel_topdown']={
    init: function() {
        this.appendStatementInput("action")
            .appendField("Parallel");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
}
//this.appendStatementInput('STACK');
Blockly.Blocks['withpecondition_topdown'] = {
    init: function () {
        this.appendValueInput("precondition")
            .appendField("preCondition");
        this.appendStatementInput("action")
            .appendField("Action");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['waitforsignal_topdown'] = {
    init: function () {
        this.appendValueInput("signal")
            .appendField("Signal");
        this.appendStatementInput("action")
            .appendField("Action");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//SelecotrMonitor
Blockly.Blocks['selectormonitor_topdown'] = {
    init: function () {
        this.appendStatementInput("WAITFORSIGNAL")
            .setCheck("Array")
            .appendField("SelectorMonitor");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['condition_left'] = {
    init: function () {
        this.appendValueInput("right");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["==", "multiple"], ["!=", "neq"], [">", "gt"], ["<", "lt"], [">=", "get"], ["<=", "let"], ["<>", "neq"]]), "opt");
        this.appendValueInput("left");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['condition_topdown'] = {
    init: function () {
        this.appendValueInput("right");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["==", "multiple"], ["!=", "neq"], [">", "gt"], ["<", "lt"], [">=", "get"], ["<=", "let"], ["<>", "neq"]]), "opt");
        this.appendValueInput("left");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['log_topdown'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("text")
            .appendField("Log");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['log_left'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("text")
            .appendField("Log");
        this.setOutput(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
//Countlimit
Blockly.Blocks['loop_topdown'] = {
    init: function() {
        this.appendValueInput("TIMES")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["LoopUntil", "0"], ["FailureUntil", "1"], ["SuccessUntil", "2"], ["CountLimit", "3"]]), "NAME");
        this.appendDummyInput()
            .appendField("times");
        this.appendStatementInput("child");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};