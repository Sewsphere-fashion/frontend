export default function Footer() {
    return (
        <footer className="border-t py-6">
            <div className="container mx-auto px-4 text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} SewSphere. All rights reserved.
            </div>
        </footer>
    )
}
