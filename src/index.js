import animate from './animate/animate'
import append from './append/append'
import base64ToArrayBuffer from './base-64-to-array-buffer/base-64-to-array-buffer'
import bind from './bind/bind'
import clamp from './clamp/clamp'
import compose from './compose/compose'
import copyArray from './copy-array/copy-array'
import copyObject from './copy-object/copy-object'
import createNewElement from './create-new-element/create-new-element'
import { addListener, removeListener } from './event-listeners/event-listeners'
import getZindex from './get-z-index/get-z-index'
import getOffset from './get-offset/get-offset'
import getParameter from './get-parameter/get-parameter'
import http from './http/http'
import insertAfter from './insert-after/insert-after'
import isEventSupported from './is-event-supported/is-event-supported'
import isType from './is-type/is-type'
import isInPage from './is-in-page/is-in-page'
import isInShadow from './is-in-shadow/is-in-shadow'
import loader from './loader/loader'
import log from './log/log'
import mix from './mix/mix'
import setZeroTimeout from './set-zero-timeout/set-zero-timeout'
import showHide from './show-hide/show-hide'
import createValue from './create-value/create-value'
import capFirst from './cap-first/cap-first'
import leadingZero from './leading-zero/leading-zero'
import roundTo from './round-to/round-to'
import xhrRequest from './xhr-request/xhr-request'
import parseTemplate  from './parse-template/parse-template'
import componentsReady from './components-ready/components-ready'
import fetchTemplate from './fetch-template/fetch-template'
import addClassName from './add-class-name/add-class-name'
import removeClassName from './remove-class-name/remove-class-name'
import removeStyles from './remove-styles/remove-styles'

import { map, some, forEach } from './array-utils'

export {
  removeStyles,
  addClassName,
  removeClassName,
  fetchTemplate,
  componentsReady,
  forEach,
  parseTemplate,
  animate,
  append,
  base64ToArrayBuffer,
  bind,
  clamp,
  compose,
  copyArray,
  copyObject,
  createNewElement,
  addListener,
  removeListener,
  getZindex,
  getOffset,
  getParameter,
  http,
  insertAfter,
  isEventSupported,
  isType,
  isInPage,
  isInShadow,
  loader,
  log,
  mix,
  map,
  setZeroTimeout,
  some,
  showHide,
  createValue,
  capFirst,
  leadingZero,
  roundTo,
  xhrRequest,
}
