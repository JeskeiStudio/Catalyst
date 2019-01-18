/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Catalyst.Protocols.Mempool.Tx');
goog.provide('proto.Catalyst.Protocols.Mempool.Tx.Timestamp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Catalyst.Protocols.Mempool.Tx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocols.Mempool.Tx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocols.Mempool.Tx.displayName = 'proto.Catalyst.Protocols.Mempool.Tx';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocols.Mempool.Tx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocols.Mempool.Tx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Catalyst.Protocols.Mempool.Tx.toObject = function(includeInstance, msg) {
  var f, obj = {
    addresssource: jspb.Message.getFieldWithDefault(msg, 1, ""),
    addressdest: jspb.Message.getFieldWithDefault(msg, 2, ""),
    signature: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 5, 0),
    outputamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    inputaction: jspb.Message.getFieldWithDefault(msg, 7, ""),
    unlockscript: jspb.Message.getFieldWithDefault(msg, 8, ""),
    unlockingprogram: jspb.Message.getFieldWithDefault(msg, 9, ""),
    updated: (f = msg.getUpdated()) && proto.Catalyst.Protocols.Mempool.Tx.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Catalyst.Protocols.Mempool.Tx}
 */
proto.Catalyst.Protocols.Mempool.Tx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocols.Mempool.Tx;
  return proto.Catalyst.Protocols.Mempool.Tx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocols.Mempool.Tx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocols.Mempool.Tx}
 */
proto.Catalyst.Protocols.Mempool.Tx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddresssource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressdest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setFee(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setOutputamount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputaction(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnlockscript(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnlockingprogram(value);
      break;
    case 10:
      var value = new proto.Catalyst.Protocols.Mempool.Tx.Timestamp;
      reader.readMessage(value,proto.Catalyst.Protocols.Mempool.Tx.Timestamp.deserializeBinaryFromReader);
      msg.setUpdated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocols.Mempool.Tx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocols.Mempool.Tx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Catalyst.Protocols.Mempool.Tx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddresssource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddressdest();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeFixed32(
      5,
      f
    );
  }
  f = message.getOutputamount();
  if (f !== 0) {
    writer.writeFixed32(
      6,
      f
    );
  }
  f = message.getInputaction();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUnlockscript();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUnlockingprogram();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUpdated();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.Catalyst.Protocols.Mempool.Tx.Timestamp.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Catalyst.Protocols.Mempool.Tx.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Catalyst.Protocols.Mempool.Tx.Timestamp.displayName = 'proto.Catalyst.Protocols.Mempool.Tx.Timestamp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.Catalyst.Protocols.Mempool.Tx.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Catalyst.Protocols.Mempool.Tx.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Catalyst.Protocols.Mempool.Tx.Timestamp}
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Catalyst.Protocols.Mempool.Tx.Timestamp;
  return proto.Catalyst.Protocols.Mempool.Tx.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Catalyst.Protocols.Mempool.Tx.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Catalyst.Protocols.Mempool.Tx.Timestamp}
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Catalyst.Protocols.Mempool.Tx.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Catalyst.Protocols.Mempool.Tx.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.prototype.setSeconds = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Catalyst.Protocols.Mempool.Tx.Timestamp.prototype.setNanos = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string addressSource = 1;
 * @return {string}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getAddresssource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setAddresssource = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string addressDest = 2;
 * @return {string}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getAddressdest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setAddressdest = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string signature = 3;
 * @return {string}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setSignature = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional fixed32 amount = 4;
 * @return {number}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional fixed32 fee = 5;
 * @return {number}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setFee = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional fixed32 outputAmount = 6;
 * @return {number}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getOutputamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setOutputamount = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string inputAction = 7;
 * @return {string}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getInputaction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setInputaction = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string unlockScript = 8;
 * @return {string}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getUnlockscript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setUnlockscript = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string unlockingProgram = 9;
 * @return {string}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getUnlockingprogram = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setUnlockingprogram = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional Timestamp updated = 10;
 * @return {?proto.Catalyst.Protocols.Mempool.Tx.Timestamp}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.getUpdated = function() {
  return /** @type{?proto.Catalyst.Protocols.Mempool.Tx.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.Catalyst.Protocols.Mempool.Tx.Timestamp, 10));
};


/** @param {?proto.Catalyst.Protocols.Mempool.Tx.Timestamp|undefined} value */
proto.Catalyst.Protocols.Mempool.Tx.prototype.setUpdated = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.Catalyst.Protocols.Mempool.Tx.prototype.clearUpdated = function() {
  this.setUpdated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Catalyst.Protocols.Mempool.Tx.prototype.hasUpdated = function() {
  return jspb.Message.getField(this, 10) != null;
};

