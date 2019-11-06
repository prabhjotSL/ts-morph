import { errors, ts } from "@ts-morph/common";
import { Expression } from "./Expression";
import { LeftHandSideExpressionedNode } from "./expressioned";
import { MemberExpression } from "./MemberExpression";

export const ElementAccessExpressionBase = LeftHandSideExpressionedNode(MemberExpression);
export class ElementAccessExpression<T extends ts.ElementAccessExpression = ts.ElementAccessExpression> extends ElementAccessExpressionBase<T> {
    /**
     * Gets this element access expression's argument expression or undefined if none exists.
     */
    getArgumentExpression(): Expression | undefined {
        return this._getNodeFromCompilerNodeIfExists(this.compilerNode.argumentExpression);
    }

    /**
     * Gets this element access expression's argument expression or throws if none exists.
     */
    getArgumentExpressionOrThrow() {
        return errors.throwIfNullOrUndefined(this.getArgumentExpression(), "Expected to find an argument expression.");
    }
}