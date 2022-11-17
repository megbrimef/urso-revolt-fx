import { FX } from "./FX";
import * as PIXI from 'pixi.js';
export declare class Sprite extends PIXI.Sprite {
    componentId: string;
    __sequenceEndTime: number;
    __fx: FX;
    constructor(componentId: string, texture: string, anchorX?: number, anchorY?: number);
    recycle(): void;
    dispose(): void;
}
