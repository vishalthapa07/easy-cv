"use server";

import { signIn, signOut } from "@/auth";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export async function doSociaLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
