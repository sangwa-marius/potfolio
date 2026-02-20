import Photo from '../assets/coder.webp';
import Container from '../components/imgWord';

function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        :root {
          --primary: #09071c;
          --accent: #FF6B35;
          --accent-light: #FFA07A;
          --text-primary: #252121;
          --text-secondary: #434242;
          --background: #FFFFFF;
          --surface: #F8F9FA;
          --border: #E5E5E5;
          --success: #22c55e;
          --warning: #f59e0b;
          --in-progress: #3b82f6;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--text-primary);
          background: var(--background);
          line-height: 1.6;
        }
        
        .home-in {
          background: var(--background);
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        
        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          padding: 1.2rem 2rem;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Libre Baskerville', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: -0.5px;
        }
        
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        
        .nav-links a {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover {
          color: var(--accent);
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          padding: 140px 2rem 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.08), transparent 70%);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 50px); }
        }
        
        .hero-content {
          max-width: 1200px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-label {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          letter-spacing: 0.5px;
        }
        
        .hero-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 5.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--primary);
          letter-spacing: -2px;
        }
        
        .hero-title .accent {
          color: var(--accent);
          display: block;
        }
        
        .hero-description {
          font-size: 1.3rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.8;
        }
        
        .hero-cta {
          display: inline-flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        
        .btn-primary {
          background: var(--accent);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: 2px solid var(--accent);
        }
        
        .btn-primary:hover {
          background: transparent;
          color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--primary);
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          border: 2px solid var(--border);
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        /* Section Styles */
        .section {
          padding: 100px 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .section-alt {
          background: var(--surface);
        }
        
        .section-title {
          font-family: 'Libre Baskerville', serif;
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
          letter-spacing: -1px;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          max-width: 600px;
        }
        
        /* Stats Section */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          text-align: center;
          margin: 5rem 0;
        }
        
        .stat-item {
          padding: 2rem;
          border-radius: 20px;
          background: white;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        
        .stat-number {
          font-family: 'Libre Baskerville', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-top: 4rem;
        }
        
        .about-image {
          width: 100%;
          max-width: 500px;
          border-radius: 20px;
          box-shadow: 30px 30px 0 var(--accent);
          transition: all 0.4s ease;
        }
        
        .about-image:hover {
          transform: translate(-10px, -10px);
        }
        
        .about-content h3 {
          font-family: 'Libre Baskerville', serif;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        
        .about-content p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }
        
        .interests-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .interest-tag {
          padding: 0.6rem 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        /* Services Section */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .service-card {
          padding: 3rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .service-card:hover::before {
          transform: scaleY(1);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .service-card p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .service-features li::before {
          content: '✓';
          color: var(--accent);
          font-weight: bold;
        }
        
        /* Experience Timeline */
        .timeline {
          position: relative;
          padding-left: 50px;
          margin-top: 4rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--border);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
        }
        
        .timeline-item:last-child {
          border-bottom: none;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -56px;
          top: 5px;
          width: 14px;
          height: 14px;
          background: var(--accent);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 2px var(--border);
        }
        
        .timeline-date {
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .timeline-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.3rem;
        }
        
        .timeline-company {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        
        .timeline-description {
          color: var(--text-secondary);
          line-height: 1.8;
        }
        
        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .skill-card {
          text-align: center;
          padding: 2rem 1rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: var(--accent);
        }
        
        .skill-card img {
          width: 60px;
          height: 60px;
          margin-bottom: 1rem;
        }
        
        .skill-card p {
          font-weight: 600;
          color: var(--text-primary);
        }

        /* =============================================
           PROJECTS SECTION — UPDATED
           ============================================= */

        /* Legend / Filter Bar */
        .projects-legend {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          align-items: center;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .legend-dot.completed { background: var(--success); }
        .legend-dot.in-progress { background: var(--in-progress); }
        .legend-dot.planned { background: #9ca3af; }

        /* Status Badges */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .status-badge.completed {
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .status-badge.in-progress {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .status-badge.planned {
          background: rgba(156, 163, 175, 0.15);
          color: #6b7280;
          border: 1px solid rgba(156, 163, 175, 0.3);
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .status-badge.completed .status-dot { background: var(--success); }
        .status-badge.in-progress .status-dot {
          background: var(--in-progress);
          animation: blink 1.5s ease-in-out infinite;
        }
        .status-badge.planned .status-dot { background: #9ca3af; }

        /* Featured (Completed) Project */
        .project-featured {
          background: white;
          border: 2px solid var(--success);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 3rem;
          box-shadow: 0 8px 40px rgba(34, 197, 94, 0.1);
          transition: all 0.4s ease;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
        }

        .project-featured:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(34, 197, 94, 0.15);
        }

        .project-featured .project-image-featured {
          width: 100%;
          height: 100%;
          min-height: 340px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .project-featured .project-image-featured::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,53,0.7) 0%, rgba(255,107,53,0.45) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-featured:hover .project-image-featured::after {
          opacity: 1;
        }

        .project-featured-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.8rem;
          font-weight: 700;
          color: white;
          font-family: 'Libre Baskerville', serif;
          z-index: 1;
          white-space: nowrap;
        }

        .project-featured-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.2rem;
        }

        .project-featured-content .project-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.3;
        }

        .project-featured-content .project-description {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1rem;
        }

        /* Completed highlight callout */
        .completed-callout {
          background: rgba(34, 197, 94, 0.07);
          border-left: 3px solid var(--success);
          border-radius: 0 8px 8px 0;
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
          color: #15803d;
          font-weight: 500;
        }

        /* Other projects grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        
        .project-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          position: relative;
        }

        .project-card.is-planned {
          opacity: 0.75;
        }

        .project-card.is-planned:hover {
          opacity: 1;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.1);
        }
        
        .project-image {
          width: 100%;
          height: 220px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }

        .project-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(255, 107, 53, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-image::after {
          opacity: 1;
        }

        /* Blurred overlay for planned projects */
        .project-card.is-planned .project-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.35);
          backdrop-filter: blur(2px);
          z-index: 1;
        }

        .project-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.2rem;
          font-weight: 700;
          color: white;
          font-family: 'Libre Baskerville', serif;
          z-index: 2;
        }

        /* Badge pinned on image */
        .image-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 3;
        }
        
        .project-content {
          padding: 1.8rem;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary);
        }
        
        .project-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.2rem;
          font-size: 0.95rem;
        }

        /* Progress bar for in-progress */
        .progress-wrap {
          margin-bottom: 1.2rem;
        }

        .progress-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.4rem;
          display: flex;
          justify-content: space-between;
        }

        .progress-bar {
          height: 6px;
          background: var(--border);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 99px;
          background: var(--in-progress);
          transition: width 0.6s ease;
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.2rem;
        }
        
        .project-tag {
          padding: 0.35rem 0.9rem;
          background: var(--surface);
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .project-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .project-links a {
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .project-links a:hover {
          color: var(--primary);
        }

        .project-links a.disabled-link {
          color: #9ca3af;
          pointer-events: none;
          cursor: default;
        }

        /* =============================================
           END PROJECTS SECTION
           ============================================= */
        
        /* Process Section */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .process-step {
          text-align: center;
          padding: 2.5rem 2rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          position: relative;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .process-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
          font-family: 'Libre Baskerville', serif;
        }

        .process-step h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .process-step p {
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        /* Achievements */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }
        
        .achievement-card {
          background: white;
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }
        
        .achievement-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.1);
        }
        
        .achievement-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .achievement-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.8rem;
        }
        
        .achievement-description {
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }
        
        .testimonial-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 3rem;
          position: relative;
        }
        
        .quote-icon {
          position: absolute;
          top: 2rem;
          left: 2rem;
          font-size: 4rem;
          color: var(--accent);
          opacity: 0.2;
        }
        
        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        .author-info h4 {
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.2rem;
        }
        
        .author-info p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Blog Section */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .blog-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .blog-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
        }

        .blog-date {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
        }

        .blog-content {
          padding: 2rem;
        }

        .blog-category {
          color: var(--accent);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.8rem;
        }

        .blog-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .blog-excerpt {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .blog-link {
          color: var(--accent);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .blog-link:hover {
          transform: translateX(5px);
        }
        
        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-top: 4rem;
        }
        
        .contact-info h3 {
          font-family: 'Libre Baskerville', serif;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        
        .contact-info p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          border-color: var(--accent);
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .contact-item img {
          width: 40px;
          height: 40px;
        }
        
        .contact-item-text h4 {
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.3rem;
        }
        
        .contact-item-text p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin: 0;
        }
        
        .social-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .social-link {
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          transform: translateY(-5px);
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 2rem;
          text-align: center;
          border-radius: 30px;
          margin: 80px 2rem;
        }

        .cta-section h2 {
          font-family: 'Libre Baskerville', serif;
          font-size: 3rem;
          color: black;
          margin-bottom: 1.5rem;
        }

        .cta-section p {
          font-size: 1.2rem;
          color: rgba(36, 29, 29, 0.9);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        .cta-button {
          background: var(--accent);
          color: white;
          padding: 1.2rem 3rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }
        
        /* Footer */
        .footer {
          background: var(--primary);
          color: white;
          text-align: center;
          padding: 3rem 2rem;
          margin-top: 5rem;
        }
        
        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .footer p {
          opacity: 0.8;
          margin-bottom: 1rem;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          opacity: 1;
          color: var(--accent);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 4rem;
          }
          
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .about-image {
            max-width: 100%;
          }
          
          .nav-links {
            gap: 1.5rem;
          }

          .project-featured {
            grid-template-columns: 1fr;
          }

          .project-featured .project-image-featured {
            min-height: 260px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .nav-links {
            display: none;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-section h2 {
            font-size: 2rem;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .projects-legend {
            gap: 1rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">SANGWA M.</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="home-in" id="home">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-label animate-in stagger-1">👋 Welcome to my portfolio</div>
            <h1 className="hero-title animate-in stagger-2">
              SANGWA Marius
              <span className="accent">Software Developer</span>
            </h1>
            <p className="hero-description animate-in stagger-3">
              A passionate student at Rwanda Coding Academy, crafting digital solutions 
              that make a difference. Specializing in web development with a focus on 
              clean code and exceptional user experiences.
            </p>
            <div className="hero-cta animate-in stagger-4">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicated</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Driven by curiosity and a passion for technology
          </p>
          
          <div className="about-grid">
            <div>
              <img src={Photo} alt="SANGWA Marius" className="about-image" />
            </div>
            <div className="about-content">
              <h3>Building the Future, One Line at a Time</h3>
              <p>
                I'm <strong>SANGWA Marius</strong>, a dedicated student at Rwanda Coding Academy 
                pursuing excellence in software development. My journey in tech began with curiosity 
                and has evolved into a genuine passion for creating meaningful digital solutions.
              </p>
              <p>
                Through rigorous coursework and hands-on projects, I've developed strong foundations 
                in web development, database management, and software engineering principles. I thrive 
                in collaborative environments and believe in the power of technology to solve real-world problems.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, always 
                striving to write clean, maintainable code while delivering exceptional user experiences.
                I'm constantly learning new technologies and best practices to stay ahead in this 
                ever-evolving field.
              </p>
              
              <div className="interests-list">
                <span className="interest-tag">🎯 Problem Solving</span>
                <span className="interest-tag">💻 Web Development</span>
                <span className="interest-tag">🎨 UI/UX Design</span>
                <span className="interest-tag">📚 Continuous Learning</span>
                <span className="interest-tag">🤝 Team Collaboration</span>
                <span className="interest-tag">🚀 Innovation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section section-alt">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Services I offer to bring your ideas to life
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>
                Creating responsive, performant websites and web applications using modern 
                frameworks and best practices.
              </p>
              <ul className="service-features">
                <li>Frontend Development</li>
                <li>Backend Integration</li>
                <li>Responsive Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>
                Designing intuitive and beautiful user interfaces that provide exceptional 
                user experiences across all devices.
              </p>
              <ul className="service-features">
                <li>User Interface Design</li>
                <li>Prototyping</li>
                <li>User Testing</li>
                <li>Design Systems</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💾</div>
              <h3>Database Design</h3>
              <p>
                Building efficient and scalable database solutions to manage and store 
                your application data securely.
              </p>
              <ul className="service-features">
                <li>Database Architecture</li>
                <li>Query Optimization</li>
                <li>Data Migration</li>
                <li>Security Implementation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Website Maintenance</h3>
              <p>
                Providing ongoing support and maintenance to keep your website running 
                smoothly and up-to-date.
              </p>
              <ul className="service-features">
                <li>Regular Updates</li>
                <li>Bug Fixes</li>
                <li>Security Patches</li>
                <li>Performance Monitoring</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Responsive Development</h3>
              <p>
                Ensuring your website looks and works perfectly on all devices, from 
                smartphones to desktop computers.
              </p>
              <ul className="service-features">
                <li>Mobile-First Approach</li>
                <li>Cross-Browser Testing</li>
                <li>Touch Optimization</li>
                <li>Adaptive Layouts</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>API Integration</h3>
              <p>
                Connecting your applications with third-party services and building 
                custom APIs for seamless data exchange.
              </p>
              <ul className="service-features">
                <li>RESTful APIs</li>
                <li>Third-party Integration</li>
                <li>Authentication</li>
                <li>API Documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience/Education Timeline */}
        <section id="experience" className="section">
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            My academic journey and professional growth
          </p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2022 - Present</div>
              <h3 className="timeline-title">A Level - Software Development</h3>
              <div className="timeline-company">Rwanda Coding Academy (RCA)</div>
              <p className="timeline-description">
                Currently pursuing advanced studies in Software Development & Digital Innovation. 
                Engaged in intensive coursework covering full-stack development, database systems, 
                software engineering principles, and agile methodologies. Active participant in 
                coding competitions and tech community events. Working on collaborative projects 
                that simulate real-world software development scenarios, including version control 
                with Git, code reviews, and continuous integration practices.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2023 - 2024</div>
              <h3 className="timeline-title">Junior Developer Projects</h3>
              <div className="timeline-company">Personal & Academic Work</div>
              <p className="timeline-description">
                Developed multiple web applications using React, JavaScript, and modern frontend 
                technologies. Collaborated with peers on team projects, implementing responsive 
                designs and interactive user interfaces. Gained practical experience in version 
                control, code review, and agile development practices. Built projects ranging from 
                e-commerce platforms to task management systems, focusing on user experience and 
                clean code architecture.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2019 - 2022</div>
              <h3 className="timeline-title">O Level Education</h3>
              <div className="timeline-company">Ecole Des Sciences Byimana</div>
              <p className="timeline-description">
                Completed secondary education with strong focus on mathematics and sciences. 
                Developed foundational analytical and problem-solving skills that later proved 
                invaluable in programming and software development. Participated in mathematics 
                competitions and science fairs, developing a logical mindset essential for coding.
              </p>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2013 - 2018</div>
              <h3 className="timeline-title">Primary Education</h3>
              <div className="timeline-company">Fountain View Academy</div>
              <p className="timeline-description">
                Completed primary education with excellent academic performance. Early exposure 
                to computers and technology sparked initial interest in the digital world. 
                Participated in computer classes and technology clubs, laying the foundation for 
                future career in software development.
              </p>
            </div>
          </div>
        </section>

        {/* My Process */}
        <section className="section section-alt">
          <h2 className="section-title">My Development Process</h2>
          <p className="section-subtitle">
            How I bring projects from concept to completion
          </p>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Discovery</h3>
              <p>
                Understanding your requirements, goals, and target audience to create 
                a solid foundation for the project.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Planning</h3>
              <p>
                Creating detailed project plans, wireframes, and technical specifications 
                to guide development.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Design</h3>
              <p>
                Crafting beautiful, user-friendly interfaces that align with your brand 
                and delight users.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Development</h3>
              <p>
                Writing clean, efficient code using modern technologies and best practices 
                to build your solution.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">5</div>
              <h3>Testing</h3>
              <p>
                Rigorous testing across devices and browsers to ensure everything works 
                flawlessly.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">6</div>
              <h3>Launch</h3>
              <p>
                Deploying your project and providing ongoing support to ensure continued 
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
          
          <div className="skills-grid">
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />
              <p>UI/UX Design</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=react" alt="React" />
              <p>React</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
              <p>MySQL</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=php" alt="PHP" />
              <p>PHP</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=git" alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
              <p>GitHub</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" />
              <p>VS Code</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" />
              <p>Tailwind CSS</p>
            </div>
            <div className="skill-card">
              <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />
              <p>Bootstrap</p>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="section section-alt">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            My completed work and what's currently in the pipeline
          </p>

          {/* Legend */}
          <div className="projects-legend">
            <div className="legend-item">
              <div className="legend-dot completed"></div>
              Completed
            </div>
            <div className="legend-item">
              <div className="legend-dot in-progress"></div>
              In Progress
            </div>
            <div className="legend-item">
              <div className="legend-dot planned"></div>
              Planned
            </div>
          </div>

          {/* ── COMPLETED: Student Portal (Featured) ── */}
          <div className="project-featured">
            <div
              className="project-image-featured"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80)' }}
            >
              <div className="project-featured-overlay">EduPortal</div>
            </div>
            <div className="project-featured-content">
              <span className="status-badge completed">
                <span className="status-dot"></span> Completed
              </span>
              <h3 className="project-title">Student Portal System</h3>
              <p className="project-description">
                A comprehensive student management system built for educational institutions. 
                Fully functional and deployed — featuring attendance tracking, grade management, 
                announcements, parent-teacher communication, assignment submission, and class schedules. 
                Built with a clean, role-based interface for students, teachers, and administrators.
              </p>
              <div className="completed-callout">
                 This is my flagship completed project — fully built, tested, and ready to use.
              </div>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">PHP</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">Bootstrap</span>
              </div>
              <div className="project-links">
                <a href="https://sangwa-marius.github.io/php_msms/" target="_blank" rel="noopener noreferrer">Live Demo →</a>
                <a href="https://github.com/sangwa-marius/php_sms.git" target="_blank" rel="noopener noreferrer">GitHub →</a>
              </div>
            </div>
          </div>

          {/* ── IN PROGRESS & PLANNED projects grid ── */}
          <div className="projects-grid">

            {/* IN PROGRESS */}
            <div className="project-card">
              <div className="project-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80)' }}>
                <div className="image-badge">
                  <span className="status-badge in-progress">
                    <span className="status-dot"></span> In Progress
                  </span>
                </div>
                <div className="project-overlay">E-Shop</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">E-Commerce Platform</h3>
                </div>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span>Progress</span><span>60%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <p className="project-description">
                  Full-featured shopping platform with product catalog, cart, and checkout. 
                  Backend and database are done; currently polishing the frontend UI and admin dashboard.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">PHP</span>
                  <span className="project-tag">MySQL</span>
                  <span className="project-tag">CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" className="disabled-link">Live Demo (coming soon)</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80)' }}>
                <div className="image-badge">
                  <span className="status-badge in-progress">
                    <span className="status-dot"></span> In Progress
                  </span>
                </div>
                <div className="project-overlay">TaskFlow</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Task Management App</h3>
                </div>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span>Progress</span><span>40%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <p className="project-description">
                  Productivity app for managing tasks and deadlines with drag-and-drop boards. 
                  Core task CRUD is working; team collaboration and real-time sync are in development.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="disabled-link">Live Demo (coming soon)</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80)' }}>
                <div className="image-badge">
                  <span className="status-badge in-progress">
                    <span className="status-dot"></span> In Progress
                  </span>
                </div>
                <div className="project-overlay">FoodHub</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Restaurant Ordering System</h3>
                </div>
                <div className="progress-wrap">
                  <div className="progress-label">
                    <span>Progress</span><span>30%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <p className="project-description">
                  Online food ordering platform with menu management and order tracking. 
                  Currently building the menu and order flow; payment and notifications coming next.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">PHP</span>
                  <span className="project-tag">MySQL</span>
                  <span className="project-tag">API</span>
                </div>
                <div className="project-links">
                  <a href="#" className="disabled-link">Live Demo (coming soon)</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub →</a>
                </div>
              </div>
            </div>

            {/* PLANNED */}
            <div className="project-card is-planned">
              <div className="project-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80)' }}>
                <div className="image-badge">
                  <span className="status-badge planned">
                    <span className="status-dot"></span> Planned
                  </span>
                </div>
                <div className="project-overlay">WeatherPro</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Weather Dashboard</h3>
                </div>
                <p className="project-description">
                  A sleek weather app with 7-day forecasts, location search, and beautiful weather animations. 
                  Planned for development after current in-progress projects wrap up.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Weather API</span>
                  <span className="project-tag">CSS3</span>
                  <span className="project-tag">JavaScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="disabled-link">Not started yet</a>
                </div>
              </div>
            </div>

            <div className="project-card is-planned">
              <div className="project-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)' }}>
                <div className="image-badge">
                  <span className="status-badge planned">
                    <span className="status-dot"></span> Planned
                  </span>
                </div>
                <div className="project-overlay">Analytics</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Business Analytics Dashboard</h3>
                </div>
                <p className="project-description">
                  Interactive analytics platform with real-time KPI tracking and chart exports. 
                  Planned as a future deep-dive into data visualization libraries.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">D3.js</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="disabled-link">Not started yet</a>
                </div>
              </div>
            </div>

            <div className="project-card is-planned">
              <div className="project-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80)' }}>
                <div className="image-badge">
                  <span className="status-badge planned">
                    <span className="status-dot"></span> Planned
                  </span>
                </div>
                <div className="project-overlay">ChatApp</div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">Real-Time Chat Application</h3>
                </div>
                <p className="project-description">
                  Modern messaging platform with group chats, file sharing, and end-to-end encryption. 
                  A future project to explore WebSocket and real-time architecture.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Socket.io</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="disabled-link">Not started yet</a>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* ===== END PROJECTS SECTION ===== */}

        {/* Achievements Section */}
        <section className="section">
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle">
            Recognition and milestones in my journey
          </p>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3 className="achievement-title">Dean's List</h3>
              <p className="achievement-description">
                Recognized for academic excellence with consistent high performance 
                throughout coursework at Rwanda Coding Academy. Maintained a strong GPA 
                while actively participating in extracurricular coding activities.
              </p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">💻</div>
              <h3 className="achievement-title">Hackathon Participant</h3>
              <p className="achievement-description">
                Participated in multiple coding competitions and hackathons, 
                developing innovative solutions under tight deadlines. Gained experience 
                in rapid prototyping and teamwork under pressure.
              </p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <h3 className="achievement-title">Web Development Certificate</h3>
              <p className="achievement-description">
                Completed comprehensive training in modern web development 
                technologies and best practices. Certified in HTML5, CSS3, JavaScript, 
                React, and responsive design principles.
              </p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">🌟</div>
              <h3 className="achievement-title">Best Project Award</h3>
              <p className="achievement-description">
                Received recognition for outstanding project work demonstrating 
                creativity, technical skill, and practical application. Project was 
                selected among 50+ submissions for innovation and implementation quality.
              </p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">🤝</div>
              <h3 className="achievement-title">Team Leadership</h3>
              <p className="achievement-description">
                Led multiple collaborative projects, coordinating team efforts 
                and ensuring successful project delivery. Managed teams of 3-5 developers 
                using agile methodologies and version control best practices.
              </p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">📚</div>
              <h3 className="achievement-title">Continuous Learner</h3>
              <p className="achievement-description">
                Actively pursuing knowledge through online courses, tutorials, 
                and staying current with latest technology trends. Completed courses 
                in advanced JavaScript, React, Node.js, and database management.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section section-alt">
          <h2 className="section-title">Latest from Blog</h2>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights on web development
          </p>
          
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <div className="blog-date">Dec 15, 2025</div>
              </div>
              <div className="blog-content">
                <div className="blog-category">Tutorial</div>
                <h3 className="blog-title">Building Responsive Layouts with CSS Grid</h3>
                <p className="blog-excerpt">
                  Learn how to create flexible and responsive layouts using CSS Grid. 
                  A comprehensive guide for modern web development.
                </p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                <div className="blog-date">Dec 10, 2025</div>
              </div>
              <div className="blog-content">
                <div className="blog-category">Development</div>
                <h3 className="blog-title">React Hooks: A Complete Guide</h3>
                <p className="blog-excerpt">
                  Deep dive into React Hooks and how they can simplify your component 
                  logic and state management.
                </p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                <div className="blog-date">Dec 5, 2025</div>
              </div>
              <div className="blog-content">
                <div className="blog-category">Best Practices</div>
                <h3 className="blog-title">Writing Clean and Maintainable Code</h3>
                <p className="blog-excerpt">
                  Essential principles and practices for writing code that's easy to 
                  read, understand, and maintain.
                </p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">
            Feedback from instructors and collaborators
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Marius demonstrates exceptional dedication to his craft. His ability to 
                quickly grasp complex concepts and apply them in practical projects is 
                impressive. A true asset to any development team.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AH</div>
                <div className="author-info">
                  <h4>AGABA Happy Jean Eudes</h4>
                  <p>Classmate</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Working with Marius on our team project was a great experience. His 
                problem-solving skills and attention to detail helped us deliver a 
                polished final product ahead of schedule.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">IR</div>
                <div className="author-info">
                  <h4>ISHIMWE Rocky</h4>
                  <p>Classmate & Project Partner</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Marius brings creativity and technical expertise to every project. His 
                clean code and thoughtful approach to software design show maturity 
                beyond his years.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">IFH</div>
                <div className="author-info">
                  <h4>ISEZERANO Forever Hyacinthe</h4>
                  <p>Project partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind? I'm always open to discussing new opportunities, 
            creative ideas, or collaborations.
          </p>
          <a href="#contact" className="cta-button">Start a Project</a>
        </div>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? Reach out!
          </p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Ready to Collaborate?</h3>
              <p>
                I'm always interested in hearing about new opportunities, 
                interesting projects, or just connecting with fellow developers. 
                Whether you have a question, a project proposal, or just want to 
                say hello, feel free to reach out!
              </p>
              <p>
                I typically respond within 24 hours and look forward to hearing 
                from you. Let's build something amazing together!
              </p>
              
              <div className="contact-methods">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mariussangwa@gmail.com" 
                   target="_blank" rel="noopener noreferrer" 
                   style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="contact-item">
                    <img src="https://skillicons.dev/icons?i=gmail" alt="Email" />
                    <div className="contact-item-text">
                      <h4>Email</h4>
                      <p>mariussangwa@gmail.com</p>
                    </div>
                  </div>
                </a>
                
                <a href="https://github.com/sangwa-marius" 
                   target="_blank" rel="noopener noreferrer" 
                   style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="contact-item">
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                    <div className="contact-item-text">
                      <h4>GitHub</h4>
                      <p>@sangwa-marius</p>
                    </div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/sangwa-marius" 
                   target="_blank" rel="noopener noreferrer" 
                   style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="contact-item">
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
                    <div className="contact-item-text">
                      <h4>LinkedIn</h4>
                      <p>SANGWA Marius</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <div className="social-links">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mariussangwa@gmail.com" 
                   target="_blank" rel="noopener noreferrer" className="social-link">
                  <Container img="https://skillicons.dev/icons?i=gmail" text="Email" />
                </a>
                
                <a href="https://instagram.com/sangwa_marius_" 
                   target="_blank" rel="noopener noreferrer" className="social-link">
                  <Container img="https://skillicons.dev/icons?i=instagram" text="Instagram" />
                </a>
                
                <a href="https://github.com/sangwa-marius" 
                   target="_blank" rel="noopener noreferrer" className="social-link">
                  <Container img="https://skillicons.dev/icons?i=github" text="GitHub" />
                </a>
                
                <a href="https://www.linkedin.com/in/sangwa-marius" 
                   target="_blank" rel="noopener noreferrer" className="social-link">
                  <Container img="https://skillicons.dev/icons?i=linkedin" text="LinkedIn" />
                </a>
                
                <a href="https://twitter.com/sangwa_marius" 
                   target="_blank" rel="noopener noreferrer" className="social-link">
                  <Container img="https://skillicons.dev/icons?i=twitter" text="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} SANGWA Marius. All rights reserved.</p>
            <p>Designed & Built with passion, dedication, and lots of coffee ☕</p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default Home;