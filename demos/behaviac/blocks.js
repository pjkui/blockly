/**
 *
 *     @author QuinnPan<quinnpan@tencent.com>
 *     @date 2016年1月5日11:49:28
 *     @description This File to register blocks for behaviac editor
 */

Blockly.Blocks['agent'] = {
    init: function () {
        this.appendStatementInput("nodes")
            .setCheck("agent")
            .appendField(new Blockly.FieldDropdown([["agent1", "0"], ["agent2", "1"], ["agent3", "2"], ["agent4", "3"]]), "agentType");
        this.setInputsInline(true);
        this.setColour(285);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.JavaScript['agent'] = function (block) {
    var dropdown_agenttype = block.getFieldValue('agentType');
    var statements_nodes = Blockly.JavaScript.statementToCode(block, 'nodes');
    // TODO: Assemble JavaScript into code variable.
    var code = "function agent_" + dropdown_agenttype + "(){\n" + statements_nodes + "}\n";
    return code;
};

//add  preAction
Blockly.Blocks['preaction_topdown'] = {
    init: function () {
        this.appendValueInput("preAction")
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
Blockly.JavaScript['preaction_topdown'] = function (block) {
    var value_preaction = Blockly.JavaScript.valueToCode(block, 'preAction', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "console.log('precondition doing');\n";
    return code;
};
Blockly.Blocks['preaction_left'] = {
    init: function () {
        this.appendValueInput("preAction")
            .setCheck("Boolean")
            .appendField("PreAction");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['preaction_left'] = function (block) {
    var value_preaction = Blockly.JavaScript.valueToCode(block, 'preAction', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "console.log('precondition doing');\n";
    return code;
};

//add postaction
Blockly.Blocks['postaction_topdown'] = {
    init: function () {
        this.appendValueInput("postAction")
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
Blockly.JavaScript['postaction_topdown'] = function (block) {
    var value_postaction = Blockly.JavaScript.valueToCode(block, 'postAction', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "console.log('postaction_topdown doing');\n";
    return code;
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
Blockly.JavaScript['postaction_left'] = function (block) {
    var value_postaction = Blockly.JavaScript.valueToCode(block, 'postAction', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "console.log('postaction_topdown doing');\n";
    return code;
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
Blockly.JavaScript['action_topdown'] = function (block) {
    var code = "console.log('action_topdown doing');\n";
    return code;
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
Blockly.JavaScript['action_left'] = function (block) {
    var code = "console.log('action_left doing');\n";
    return code;
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
Blockly.JavaScript['noop_topdown'] = function (block) {
    var code = "console.log('noop_topdown doing');\n";
    return code;
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
Blockly.JavaScript['noop_left'] = function (block) {
    var code = "console.log('noop_left doing');\n";
    return code;
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
Blockly.JavaScript['wait_left'] = function (block) {
    var argument = Blockly.JavaScript.valueToCode(block, "actions", Blockly.JavaScript.ORDER_NONE);
    var code = "console.log('wait_left doing');\n" + "{\n" + argument + "}\n";

    return code;
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
Blockly.JavaScript['action_topdown'] = function (block) {
    var argument = Blockly.JavaScript.valueToCode(block, "actions", Blockly.JavaScript.ORDER_NONE);
    var code = "console.log('action_topdown doing');\n" + "{\n" + argument + "}\n";
    return code;
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
Blockly.JavaScript['action_topdown'] = function (block) {
    var argument = Blockly.JavaScript.valueToCode(block, "actions", Blockly.JavaScript.ORDER_NONE);
    var code = "console.log('action_topdown doing');\n" + "{\n" + argument + "}\n";
    return code;
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
Blockly.JavaScript['sequence_topdown'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
    var code = "console.log('action_topdown doing. type:"+dropdown_type+"');\n" +
        "{\n" + statements_actions + "}\n";
    return code;
};

//Parallel
Blockly.Blocks['parallel_topdown'] = {
    init: function () {
        this.appendStatementInput("actions")
            .appendField("Parallel");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['parallel_topdown'] = function (block) {
    var argument = Blockly.JavaScript.statementToCode(block, "actions");
    var code = "console.log('parallel_topdown doing');\n" +
        "{\n" + argument + "}\n";
    return code;
};

//this.appendStatementInput('STACK');
Blockly.Blocks['withpecondition_topdown'] = {
    init: function () {
        this.appendValueInput("precondition")
            .appendField("preCondition");
        this.appendStatementInput("actions")
            .appendField("Action");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['withpecondition_topdown'] = function (block) {
    var value_precondition = Blockly.JavaScript.valueToCode(block, 'precondition', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
    var code = "console.log('withpecondition_topdown doing');\n" +
        "{\n" + value_precondition + "\n"
        + statements_actions + "}\n";
    return code;
};

Blockly.Blocks['waitforsignal_topdown'] = {
    init: function () {
        this.appendValueInput("signal")
            .appendField("Signal");
        this.appendStatementInput("actions")
            .appendField("Action");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['waitforsignal_topdown'] = function (block) {
    var precondition = Blockly.JavaScript.valueToCode(block, "signal", Blockly.JavaScript.ORDER_ATOMIC);
    var argument = Blockly.JavaScript.statementToCode(block, "actions");
    var code = "console.log('waitforsignal_topdown doing');\n" +
        "{\n" + precondition + "\n"
        + argument + "}\n";
    return  code;
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
Blockly.JavaScript['selectormonitor_topdown'] = function (block) {
    var argument = Blockly.JavaScript.statementToCode(block, "WAITFORSIGNAL");
    var code = "console.log('selectormonitor_topdown doing');\n" +
        "{\n" + argument + "}\n";
    return code;
};

Blockly.Blocks['condition_left'] = {
    init: function () {
        this.appendValueInput("left");
        this.appendDummyInput("opt")
            .appendField(new Blockly.FieldDropdown([["==", "=="], ["!=", "!="], [">", ">"], ["<", "<"], [">=", ">="], ["<=", "<="]]), "opt");
        this.appendValueInput("right");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['condition_left'] = function (block) {
    var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_opt = block.getFieldValue('opt');
    var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_ATOMIC);

    var code = "console.log('condition_left doing');\n" +
        "if (" + value_left + " " + dropdown_opt + "  " + value_right + "){\n" +
        "\treturn true;\n" +
        "}\n" +
        "else{\n" +
        "\treturn false;\n" +
        "}\n";
    return [code, Blockly.JavaScript.ORDER_NONE];;
};


Blockly.Blocks['condition_topdown'] = {
    init: function () {
        this.appendValueInput("right");
        this.appendDummyInput("opt")
            .appendField(new Blockly.FieldDropdown([["==", "=="], ["!=", "!="], [">", ">"], ["<", "<"], [">=", ">="], ["<=", "<="]]), "opt");
        this.appendValueInput("left");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['condition_topdown'] = function (block) {
    var right = Blockly.JavaScript.valueToCode(block, "right", Blockly.JavaScript.ORDER_NONE);
    var operator = Blockly.JavaScript.valueToCode(block, "opt", Blockly.JavaScript.ORDER_NONE);
    var left = Blockly.JavaScript.valueToCode(block, "left", Blockly.JavaScript.ORDER_NONE);
    var code = "console.log('condition_topdown doing');\n" +
        "if (" + right + " " + operator + "  " + left + "){\n" +
        "return true;\n" +
        "}\n" +
        "else{\n" +
        "return false;\n" +
        "}\n";
    return code;
};


Blockly.Blocks['log_topdown'] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck("text")
            .appendField("Log");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['action_topdown'] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_NONE);
    var code = "console.log('action_topdown doing" + text + "');\n";
    return code;
};

Blockly.Blocks['log_left'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .setCheck("text")
            .appendField("Log");
        this.setOutput(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['log_left'] = function (block) {
    var text = Blockly.JavaScript.valueToCode(block, "text", Blockly.JavaScript.ORDER_NONE);
    var code = "console.log('action_topdown doing" + text + "');\n";
    return code;
};

//Countlimit
Blockly.Blocks['loop_topdown'] = {
    init: function () {
        this.appendValueInput("times")
            .setCheck("Number")
            .appendField(new Blockly.FieldDropdown([["LoopUntil", "0"], ["FailureUntil", "1"], ["SuccessUntil", "2"], ["CountLimit", "3"]]), "type");
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
Blockly.JavaScript['loop_topdown'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_child = Blockly.JavaScript.statementToCode(block, 'child');
    // TODO: Assemble JavaScript into code variable.
    var code = "console.log('loop_topdown doing');\n";
    code += "for(int i=0;i<" + value_times + ";i++){\n" +
        statements_child +
        "}\n"
    return code;
};

