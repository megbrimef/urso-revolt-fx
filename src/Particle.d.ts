import { Node } from "./util/LinkedList";
import { IParticle, IParticleSettings, FX, IParticleEmitterParent } from "./FX";
import { Sprite } from "./Sprite";
import { ParticleEmitter } from "./ParticleEmitter";
import { MovieClip } from "./MovieClip";
import { FXSignal } from "./util/FXSignal";
export interface IParticleSignals {
    died: FXSignal;
    bounced: FXSignal;
    updated: FXSignal;
}
export declare class Particle extends Node implements IParticle, IParticleEmitterParent {
    component: Sprite | MovieClip;
    duration: number;
    distance: number;
    startX: number;
    startY: number;
    deltaX: number;
    deltaY: number;
    distanceEase: Function;
    useFadeIn: boolean;
    fadeInEase: Function;
    fadeInDuration: number;
    alphaStart: number;
    alphaDelta: number;
    alphaEase: Function;
    alphaDuration: number;
    useTint: boolean;
    tintStart: number;
    tintEnd: number;
    tintEase: Function;
    useMotion: boolean;
    useScale: boolean;
    useAlpha: boolean;
    useSpawns: boolean;
    useChilds: boolean;
    uniformScale: boolean;
    useScaleIn: boolean;
    scaleInEase: Function;
    scaleInDuration: number;
    scaleStart: number;
    scaleDelta: number;
    scaleEase: Function;
    scaleDuration: number;
    scaleXStart: number;
    scaleXDelta: number;
    scaleXEase: Function;
    scaleXDuration: number;
    scaleYStart: number;
    scaleYDelta: number;
    scaleYEase: Function;
    scaleYDuration: number;
    useRotation: boolean;
    rotationSpeed: number;
    rotationEnd: number;
    useGravity: boolean;
    gravity: number;
    moveSpeedX: number;
    moveSpeedY: number;
    useFloor: boolean;
    floorY: number;
    bounceFac: number;
    friction: number;
    useAlign: boolean;
    dx: number;
    dy: number;
    emitter: ParticleEmitter;
    settings: IParticleSettings;
    componentId: string;
    time: number;
    private _color;
    private _dt;
    private _spawnOnBounce;
    private _childEmitters;
    private _hasChildEmitters;
    private _spawnOnHalfway;
    __recycled: boolean;
    __fx: FX;
    __parent: IParticleEmitterParent;
    __on: IParticleSignals;
    constructor();
    init(emitter: ParticleEmitter, settings: IParticleSettings, scaleMod?: number): IParticle;
    update(dt: number): void;
    stop(): void;
    recycle(): void;
    dispose(): void;
    readonly x: number;
    readonly y: number;
    readonly on: IParticleSignals;
    __removeChildEmitter(emitter: ParticleEmitter): void;
}
