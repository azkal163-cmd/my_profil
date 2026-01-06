export default function Navbar() {
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<h1 className="text-xl font-bold tracking-tight">Profile Azka</h1>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a href="#home" className="hover:text-neutral-600">Home</a>
<a href="#about" className="hover:text-neutral-600">About</a>
<a href="#skills" className="hover:text-neutral-600">Skill</a>
<a href="#licenses" className="hover:text-neutral-600">Licenses</a>
<a href="#contact" className="hover:text-neutral-600">Contact</a>
</nav>
</div>
</header>
);
}