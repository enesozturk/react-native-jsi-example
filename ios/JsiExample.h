#import <React/RCTBridgeModule.h>
#import "../cpp/example.h"

@interface MyJsiModule : NSObject <RCTBridgeModule>

@property(nonatomic, assign) BOOL setBridgeOnMainQueue;

@end
