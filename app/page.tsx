"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, Settings, MessageSquare, PanelRight, X, Maximize2, Minimize2, Copy } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export default function Dashboard() {
  const [rightPanelOpen, setRightPanelOpen] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#0e0e0e] text-gray-900 dark:text-white font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-white dark:bg-[#121212] p-5 flex flex-col gap-8 rounded-r-xl shadow-lg border-r border-gray-200 dark:border-gray-800">
        {/* Brand and Theme Toggle */}
        <div className="flex items-center justify-between px-2">
          <div className="text-xl font-semibold">Uklid</div>
          <ModeToggle />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5">
          <Button variant="ghost" className="justify-start rounded-xl w-full h-10 px-3 text-gray-900 dark:text-white">
            <Home className="mr-3 h-4 w-4" />
            <span>Home</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start rounded-xl w-full h-10 px-3 text-gray-500 dark:text-gray-400"
          >
            <User className="mr-3 h-4 w-4" />
            <span>Account</span>
          </Button>
          <Button
            variant="ghost"
            className="justify-start rounded-xl w-full h-10 px-3 text-gray-500 dark:text-gray-400"
          >
            <Settings className="mr-3 h-4 w-4" />
            <span>Settings</span>
          </Button>
        </nav>

        {/* Chats Section */}
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium">
              Recent Chats
            </span>
          </div>
          <div className="space-y-1.5 overflow-auto flex-1">
            {[
              { name: "Project Discussion", time: "2m ago", active: true },
              { name: "Team Meeting", time: "1h ago", active: false },
              { name: "Client Feedback", time: "3h ago", active: false },
              { name: "Product Planning", time: "Yesterday", active: false },
              { name: "Design Review", time: "2d ago", active: false },
            ].map((chat, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`justify-start rounded-lg w-full h-auto py-2 px-3 text-left ${
                  chat.active
                    ? "bg-gray-100 dark:bg-[#1e1e1e] text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="text-sm">{chat.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 flex items-center mt-0.5">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {chat.time}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Chat Area */}
        <div className={cn("flex flex-1 transition-all duration-300 ease-in-out", rightPanelOpen ? "pr-0" : "pr-0")}>
          {/* Chat Messages and Input */}
          <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Chat Messages */}
            <div className="flex-1 overflow-auto p-6 pb-40 bg-gray-50 dark:bg-[#0e0e0e]">
              <div className="max-w-3xl mx-auto space-y-6">
                {/* AI Message */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-xs font-medium text-white">
                    AI
                  </div>
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl rounded-tl-none p-4 max-w-[90%] shadow-sm border border-gray-200 dark:border-gray-800">
                    <p className="text-sm mb-3">Here's a sample React component for the project dashboard:</p>
                    <div className="bg-gray-50 dark:bg-[#0e0e0e] rounded-lg p-3 font-mono text-xs overflow-x-auto border border-gray-200 dark:border-gray-800">
                      <pre>{`function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Project Dashboard</h1>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <Card title="Tasks" value={24} />
        <Card title="Completed" value={16} />
        <Card title="Pending" value={8} />
      </div>
    </div>
  );
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 shadow-lg z-20">
              <div className="max-w-3xl mx-auto">
                <div className="relative flex items-end gap-4">
                  <div className="flex-1 min-h-[20px] relative">
                    <div className="border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-sm">
                      <textarea
                        placeholder="Type your message..."
                        rows={1}
                        className="w-full p-3 bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white resize-none focus:outline-none"
                        style={{ minHeight: '44px', maxHeight: '200px' }}
                        maxLength={4000}
                      />
                    </div>
                    <div className="absolute right-3 bottom-3 flex items-center gap-2 text-sm text-gray-500">
                      <span>0/4000</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input type="file" className="hidden" id="file-upload" />
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button className="h-10 w-10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                      >
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                      </svg>
                    </Button>
                  </div>
                </div>

                {/* Suggestions */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="text-sm">
                    Add Integration
                  </Button>
                  <Button variant="outline" size="sm" className="text-sm">
                    Create mobile responsive layout
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div
            className={cn(
              "border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] overflow-hidden transition-all duration-300 ease-in-out",
              rightPanelOpen ? "w-1/2" : "w-0"
            )}
          >
            {rightPanelOpen && (
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-sm font-medium">Output Display</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleFullscreen}
                    >
                      {isFullscreen ? (
                        <Minimize2 className="h-4 w-4" />
                      ) : (
                        <Maximize2 className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleRightPanel}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className={cn(
                  'h-full overflow-auto p-4',
                  isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-[#121212]' : ''
                )}>
                  {/* Pythagorean Theorem Lesson */}
                  <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-4 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
                    <h3 className="text-lg font-semibold mb-3">Pythagorean Theorem</h3>
                    <div className="space-y-3 text-sm">
                      <p>The Pythagorean theorem is a fundamental principle in Euclidean geometry concerning the relationship between the three sides of a right-angled triangle. It states that the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides (the legs).</p>
                      <p className="font-semibold">The formula is expressed as:</p>
                      <div className="my-2 p-3 bg-gray-100 dark:bg-[#0e0e0e] rounded-md text-center">
                        <code className="text-md font-mono text-purple-600 dark:text-purple-400">a² + b² = c²</code>
                      </div>
                      <p>Where:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li><code>a</code> and <code>b</code> are the lengths of the two legs of the right triangle.</li>
                        <li><code>c</code> is the length of the hypotenuse.</li>
                      </ul>
                      <h4 className="text-md font-semibold pt-3">Example:</h4>
                      <p>Imagine a right-angled triangle where the lengths of the two legs are:</p>
                      <ul className="list-disc list-inside pl-4">
                          <li>Side <code>a = 3</code> units</li>
                          <li>Side <code>b = 4</code> units</li>
                      </ul>
                      <p>We can use the Pythagorean theorem to find the length of the hypotenuse (<code>c</code>):</p>
                      <ol className="list-decimal list-inside pl-4 space-y-1">
                          <li>Substitute the values into the formula: <code className="font-mono">3² + 4² = c²</code></li>
                          <li>Calculate the squares: <code className="font-mono">9 + 16 = c²</code></li>
                          <li>Sum the squares: <code className="font-mono">25 = c²</code></li>
                          <li>Take the square root of both sides to find c: <code className="font-mono">c = √25</code></li>
                          <li>Result: <code className="font-mono">c = 5</code> units</li>
                      </ol>
                      <p>Thus, the length of the hypotenuse is <strong>5 units</strong>.</p>
                      <div className="mt-4 p-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-[#121212]">
                          <p className="text-center font-medium">Visualizing a Right Triangle (3-4-5)</p>
                          <div className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                              <p>Imagine a triangle with:</p>
                              <p>One vertical side (leg a) = 3 units</p>
                              <p>One horizontal side (leg b) = 4 units</p>
                              <p>The longest side, opposite the right angle (hypotenuse c) = 5 units</p>
                              <p className="mt-1">(This forms a 90° angle between sides a and b)</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Removed Circle Properties and Regular Polygon sections */}
              </div>
            )}
          </div>
        </div>
        {/* Panel Toggle when closed */}
        {!rightPanelOpen && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4 h-8 w-8 rounded-full shadow-md border border-gray-200 dark:border-gray-800"
            onClick={toggleRightPanel}
          >
            <PanelRight className="h-4 w-4" />
          </Button>
        )}
      </main>
    </div>
  )
}