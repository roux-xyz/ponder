import { Hex } from "viem";
import { assertType, test } from "vitest";

import { BaseColumn, p } from "./p";
import { RecoverColumnType } from "./types";

test("string", () => {
  const c = p.string();
  //    ^?

  assertType<BaseColumn<"string", never, false, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as string);
});

test("int", () => {
  const c = p.int();
  //    ^?

  assertType<BaseColumn<"int", never, false, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as number);
});

test("float", () => {
  const c = p.float();
  //    ^?

  assertType<BaseColumn<"float", never, false, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as number);
});

test("boolean", () => {
  const c = p.boolean();
  //    ^?

  assertType<BaseColumn<"boolean", never, false, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as boolean);
});

test("bytes", () => {
  const c = p.bytes();
  //    ^?

  assertType<BaseColumn<"bytes", never, false, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as Hex);
});

test("bigint", () => {
  const c = p.bigint();
  //    ^?

  assertType<BaseColumn<"bigint", never, false, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as bigint);
});

test("optional", () => {
  const c = p.string({ optional: true });
  //    ^?

  assertType<BaseColumn<"string", never, true, false>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as string);
});

test("list", () => {
  const c = p.string({ list: true });
  //    ^?

  assertType<BaseColumn<"string", never, false, true>>(c);

  type t = RecoverColumnType<typeof c>;
  //   ^?

  assertType<t>({} as string[]);
});
