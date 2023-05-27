import { withAuth } from "next-auth/middleware";

//protect routes
export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/conversations/:path*", "/users/:path*"],
};
