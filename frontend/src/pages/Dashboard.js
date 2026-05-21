import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8">
        <section className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-6">
          <h1 className="text-xl font-semibold text-brand-dark">
            Loading dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Preparing your staff workspace.
          </p>
        </section>
      </main>
    );
  }

  const displayName = user.full_name || user.first_name || 'Staff member';
  const staffDetails = [
    ['Name', displayName],
    ['Email', user.email || 'Not provided'],
    ['Role', user.role || 'Staff'],
  ];
  const operationalSections = [
    ['Appointments', "Review today's clinic schedule"],
    ['Patients', 'Access patient records and contact details'],
    ['Clinic Tasks', 'Track staff handoffs and follow-ups'],
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-500">Dental Clinic Management System</p>
            <h1 className="text-2xl font-semibold text-brand-dark">
              Dashboard
            </h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 py-6">
        <section className="mb-6">
          <p className="text-sm text-gray-500">Signed in as</p>
          <h2 className="mt-1 text-xl font-semibold text-brand-dark">
            {displayName}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Use the dashboard to move through daily clinic operations.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <section className="grid gap-6 md:grid-cols-3">
            {operationalSections.map(([title, description]) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </section>

          <aside className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-brand-dark">
              Staff Profile
            </h2>

            <dl className="mt-4 space-y-4">
              {staffDetails.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-sm font-medium text-gray-700">{label}</dt>
                  <dd className="mt-1 text-sm text-gray-500">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
