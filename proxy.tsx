import {NextRequest} from "next/server";
import {NextResponse} from "next/server";

export default function Proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};
