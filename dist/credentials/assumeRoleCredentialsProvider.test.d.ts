/// <reference types="jest" />
import { MetadataBearer } from "@aws-sdk/types";
import { Client, Command, SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
export declare const mockSend: <HandlerOptions, ClientInput extends object, ClientOutput extends MetadataBearer, ResolvedClientConfiguration extends SmithyResolvedConfiguration<HandlerOptions>, InputType extends ClientInput, OutputType extends ClientOutput>(client: new (config: never) => Client<HandlerOptions, ClientInput, ClientOutput, ResolvedClientConfiguration>) => jest.Mock<unknown, [Command<InputType, OutputType, ResolvedClientConfiguration, any, any>]>;
