/*
 * author: chia.chang@ge.com
 */

'use strict';

const debug = require('debug');
const EventEmitter=require('events');
const request=require('request');

class RSCommon extends EventEmitter {

    constructor(){
	super();
	this._request=request;	
    }

    debug(namespace){
	this._debug=debug(namespace);
	return this._debug;
    }

    randomString(size, chars){
	size = size || 6;
	chars = chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let max = chars.length;
	let ret = '';
	for (let i = 0; i < size; i++) {
	    ret += chars.charAt(Math.floor(Math.random() * max));
	}
	return ret;
    }

    obj2Map(obj){
	let op=new Map();
	Object.keys(obj).forEach((key)=>{
	    op.set(key,obj[key]);
	});

	return op;
    }
}

module.exports=RSCommon;
