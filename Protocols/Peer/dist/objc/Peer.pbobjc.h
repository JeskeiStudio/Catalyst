// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: Peer.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers.h>
#else
 #import "GPBProtocolBuffers.h"
#endif

#if GOOGLE_PROTOBUF_OBJC_VERSION < 30002
#error This file was generated by a newer version of protoc which is incompatible with your Protocol Buffer library sources.
#endif
#if 30002 < GOOGLE_PROTOBUF_OBJC_MIN_SUPPORTED_VERSION
#error This file was generated by an older version of protoc which is incompatible with your Protocol Buffer library sources.
#endif

// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

CF_EXTERN_C_BEGIN

NS_ASSUME_NONNULL_BEGIN

#pragma mark - PeerRoot

/**
 * Exposes the extension registry for this file.
 *
 * The base class provides:
 * @code
 *   + (GPBExtensionRegistry *)extensionRegistry;
 * @endcode
 * which is a @c GPBExtensionRegistry that includes all the extensions defined by
 * this file and all files that it depends on.
 **/
@interface PeerRoot : GPBRootObject
@end

#pragma mark - PingRequest

typedef GPB_ENUM(PingRequest_FieldNumber) {
  PingRequest_FieldNumber_Ping = 1,
};

@interface PingRequest : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *ping;

@end

#pragma mark - PongResponse

typedef GPB_ENUM(PongResponse_FieldNumber) {
  PongResponse_FieldNumber_Pong = 1,
};

@interface PongResponse : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *pong;

@end

#pragma mark - PeerInfoRequest

typedef GPB_ENUM(PeerInfoRequest_FieldNumber) {
  PeerInfoRequest_FieldNumber_Ping = 1,
};

@interface PeerInfoRequest : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *ping;

@end

#pragma mark - PeerInfoResponse

typedef GPB_ENUM(PeerInfoResponse_FieldNumber) {
  PeerInfoResponse_FieldNumber_Pong = 1,
};

@interface PeerInfoResponse : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *pong;

@end

#pragma mark - PeerNeighborsRequest

typedef GPB_ENUM(PeerNeighborsRequest_FieldNumber) {
  PeerNeighborsRequest_FieldNumber_Ping = 1,
};

@interface PeerNeighborsRequest : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *ping;

@end

#pragma mark - PeerNeighborsResponse

typedef GPB_ENUM(PeerNeighborsResponse_FieldNumber) {
  PeerNeighborsResponse_FieldNumber_Pong = 1,
};

@interface PeerNeighborsResponse : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *pong;

@end

#pragma mark - ChallengeRequest

typedef GPB_ENUM(ChallengeRequest_FieldNumber) {
  ChallengeRequest_FieldNumber_Type = 1,
  ChallengeRequest_FieldNumber_Nonce = 2,
};

@interface ChallengeRequest : GPBMessage

@property(nonatomic, readwrite) int32_t type;

@property(nonatomic, readwrite) int32_t nonce;

@end

#pragma mark - ChallengeResponse

typedef GPB_ENUM(ChallengeResponse_FieldNumber) {
  ChallengeResponse_FieldNumber_Type = 1,
  ChallengeResponse_FieldNumber_SignedNonce = 2,
  ChallengeResponse_FieldNumber_PublicKey = 3,
};

@interface ChallengeResponse : GPBMessage

@property(nonatomic, readwrite) int32_t type;

@property(nonatomic, readwrite, copy, null_resettable) NSString *signedNonce;

@property(nonatomic, readwrite, copy, null_resettable) NSString *publicKey;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)