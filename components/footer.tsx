import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="text-sm text-gray-600">
            © 2026 Next Blog. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
