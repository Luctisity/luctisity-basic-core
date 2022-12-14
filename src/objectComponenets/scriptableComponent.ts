import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";
import { ScriptRunner } from "../../modules/luctisity-evaluator/main";
import { Id } from "../id/id";

export default class ScriptableComponent extends CoreComponent {

    name: string = 'scriptable';

    protected script: any = null;

    private scriptRunner = new ScriptRunner(Id.new(), this.parent?.id);

    constructor (parent?: CoreObject, script?: any) {
        super(parent);
        this.script = script || this.script;
        this.scriptRunner.setScript(script);
    }

    callMethod (name: string, ...args: any) {
        this.scriptRunner.callMethod(name, ...args);
    }

    getType () {
        return ScriptableComponent;
    }

}