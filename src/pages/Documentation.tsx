// src/pages/Documentation.tsx
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import { Book, Code, Rocket, ArrowRight, Terminal, Database, Cloud, Shield, CheckCircle, AlertCircle } from 'lucide-react'

const Documentation = () => {
  const navigate = useNavigate()

  const gettingStarted = [
    {
      title: 'Installation',
      content: 'Install our SDKs via npm, pip, or download directly from our repositories. All packages are open-source and regularly updated with security patches and new features.',
    },
    {
      title: 'Authentication',
      content: 'All API requests require authentication using API keys. Generate your keys from the dashboard and include them in the Authorization header as Bearer tokens. Keys can be scoped to specific resources and permissions.',
    },
    {
      title: 'Quick Start',
      content: 'Get started in minutes with our comprehensive starter templates. Initialize your first project, configure your environment variables, and make your first API call following our step-by-step guide.',
    },
    {
      title: 'Rate Limits',
      content: 'API rate limits are 1000 requests per hour for free tier, 10,000 for professional, and unlimited for enterprise. Rate limit headers are included in every response to help you manage your usage.',
    },
  ]

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/ai/predict',
      description: 'Lumina AI: Run AI-powered predictions and analysis. Supports healthcare diagnostics, image recognition, and predictive analytics across multiple domains.',
    },
    {
      method: 'GET',
      endpoint: '/api/v1/academy/courses',
      description: 'Academy: Retrieve available courses and learning paths. Filter by category, difficulty level, and instructor. Includes enrollment status and progress tracking.',
    },
    {
      method: 'POST',
      endpoint: '/api/v1/topup/purchase',
      description: 'Top-Up Platform: Process airtime, data bundle, or bill payment transactions. Supports multiple carriers and payment methods with instant delivery.',
    },
    {
      method: 'GET',
      endpoint: '/api/v1/academy/progress',
      description: 'Academy: Track student learning progress, completed modules, quiz scores, and certificate achievements. Includes detailed analytics and recommendations.',
    },
  ]

  const sdkExamples = [
    {
      language: 'Python',
      code: `from nexentrix import NexentrixClient

client = NexentrixClient(api_key='your_api_key')

# Lumina AI - Run AI prediction
result = client.ai.predict(
    model='lumina-diagnostics',
    data={'image_url': 'https://...'}
)

# Academy - Get courses
courses = client.academy.get_courses(
    category='machine-learning'
)

# Top-Up - Purchase airtime
transaction = client.topup.purchase(
    phone='254712345678',
    amount=100,
    currency='KES'
)`,
    },
    {
      language: 'JavaScript',
      code: `import { NexentrixClient } from '@nexentrix/sdk';

const client = new NexentrixClient({
  apiKey: 'your_api_key'
});

// Lumina AI prediction
const aiResult = await client.ai.predict({
  model: 'lumina-diagnostics',
  data: { imageUrl: 'https://...' }
});

// Academy courses
const courses = await client.academy.getCourses({
  category: 'machine-learning'
});

// Top-Up purchase
const transaction = await client.topup.purchase({
  phone: '254712345678',
  amount: 100,
  currency: 'KES'
});`,
    },
    {
      language: 'cURL',
      code: `# Lumina AI - Prediction
curl -X POST https://api.nexentrix.com/v1/ai/predict \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "lumina-diagnostics", "data": {}}'

# Academy - Get Courses
curl -X GET https://api.nexentrix.com/v1/academy/courses \\
  -H "Authorization: Bearer your_api_key"

# Top-Up - Purchase
curl -X POST https://api.nexentrix.com/v1/topup/purchase \\
  -H "Authorization: Bearer your_api_key" \\
  -d '{"phone": "254712345678", "amount": 100}'`,
    },
  ]

  const securityPractices = [
    {
      title: 'Data Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Database encryption keys are rotated every 90 days and stored in hardware security modules.',
    },
    {
      title: 'Industry Compliance',
      description: 'Our platform meets international standards including GDPR, PCI-DSS for payment processing, and HIPAA for healthcare data. Regular security audits and comprehensive audit logs ensure compliance.',
    },
    {
      title: 'Access Control',
      description: 'Role-based access control (RBAC) with fine-grained permissions. Support for single sign-on (SSO), multi-factor authentication (MFA), and IP whitelisting for enhanced security.',
    },
    {
      title: 'Data Privacy',
      description: 'Configurable data retention policies and automated data deletion after retention period. African data residency options available for compliance with local regulations.',
    },
  ]

  const bestPractices = [
    {
      icon: CheckCircle,
      title: 'Error Handling',
      description: 'Always implement proper error handling in your integration. Our API returns standardized error codes (400, 401, 403, 404, 429, 500) with descriptive messages. Use exponential backoff for rate limit errors.',
    },
    {
      icon: CheckCircle,
      title: 'Webhooks',
      description: 'Use webhooks for real-time event notifications instead of polling. Configure webhook endpoints in your dashboard and verify webhook signatures using HMAC-SHA256 to ensure authenticity.',
    },
    {
      icon: CheckCircle,
      title: 'Caching',
      description: 'Implement caching strategies to reduce API calls. Respect Cache-Control headers and use ETags for conditional requests. Recommended cache TTL is 5-15 minutes for most endpoints.',
    },
    {
      icon: AlertCircle,
      title: 'API Keys',
      description: 'Never expose API keys in client-side code or public repositories. Use environment variables and secret management services. Rotate keys regularly and immediately revoke compromised keys.',
    },
  ]

  return (
    <PageLayout>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="badge inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Book className="h-4 w-4 mr-2" />
                <span className="text-sm">Developer Resources</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                API Documentation
                <span className="text-primary block mt-2">Complete Integration Guide</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Comprehensive technical documentation for integrating Nexentrix products into your applications. 
                Build powerful AI solutions, educational platforms, and fintech services for Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Getting Started</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gettingStarted.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Code className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">API Endpoints</h2>
            </div>
            
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-500' :
                      endpoint.method === 'POST' ? 'bg-green-500/20 text-green-500' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-primary font-mono">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">SDK Examples</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sdkExamples.map((example, idx) => (
                <div key={idx} className="rounded-2xl bg-card border border-border overflow-hidden">
                  <div className="px-4 py-2 bg-secondary border-b border-border">
                    <span className="text-sm font-medium">{example.language}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm text-muted-foreground font-mono">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Security & Compliance</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityPractices.map((practice, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Database className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Integration Best Practices</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((practice, idx) => {
                const Icon = practice.icon
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                    <div className="flex items-start gap-3">
                      <Icon className={`h-6 w-6 mt-1 ${
                        practice.icon === CheckCircle ? 'text-green-500' : 'text-yellow-500'
                      }`} />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                        <p className="text-muted-foreground">{practice.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Cloud className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Infrastructure & Deployment</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
                <p className="text-muted-foreground mb-4">
                  Our platform is built on scalable cloud infrastructure optimized for African and global markets. 
                  We maintain high availability with automatic failover, load balancing, and regional data centers to ensure low latency 
                  for all our products: Lumina AI, Academy, and Top-Up Platform.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-3 rounded-lg bg-secondary">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary">
                    <div className="text-2xl font-bold text-primary">Fast</div>
                    <div className="text-xs text-muted-foreground">Response Times</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary">
                    <div className="text-2xl font-bold text-primary">Multi</div>
                    <div className="text-xs text-muted-foreground">Region</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3">Integration Options</h3>
                <p className="text-muted-foreground">
                  Flexible integration options including REST APIs, webhooks, and SDKs for Python, JavaScript, and mobile platforms. 
                  Enterprise clients can request custom integrations, dedicated instances, and on-premises deployment options. 
                  All deployments include dedicated technical support and regular platform updates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-3">Scalability & Performance</h3>
                <p className="text-muted-foreground">
                  Our infrastructure scales automatically to handle your growth - from startups to enterprise. 
                  Built-in monitoring, analytics dashboards, and performance optimization ensure your applications run smoothly. 
                  Support for high-volume transactions in the Top-Up Platform and concurrent users in Academy with optimized AI model serving for Lumina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="relative text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Technical Support?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our support team is ready to help with integration questions, troubleshooting, and technical guidance. 
                  Get assistance with Lumina AI implementation, Academy platform integration, or Top-Up Platform API setup.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105">
                    Contact Support Team
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-all">
                    Explore Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  )
}

export default Documentation
