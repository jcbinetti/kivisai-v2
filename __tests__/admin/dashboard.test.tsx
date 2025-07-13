import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminDashboard from '@/app/admin/page';
import { describe, it, expect } from '@jest/globals';

describe('AdminDashboard', () => {
    it('renders the main dashboard heading', () => {
        render(<AdminDashboard />);
        const heading = screen.getByText(/Kivisai Admin Dashboard/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders all four stat cards', () => {
        render(<AdminDashboard />);
        const pageStat = screen.getByText(/Seiten/i);
        const imageStat = screen.getByText(/Bilder/i);
        const colorStat = screen.getByText(/Farben/i);
        const visitorStat = screen.getByText(/Besucher/i);

        expect(pageStat).toBeInTheDocument();
        expect(imageStat).toBeInTheDocument();
        expect(colorStat).toBeInTheDocument();
        expect(visitorStat).toBeInTheDocument();
    });

    it('renders the actions panel', () => {
        render(<AdminDashboard />);
        const actionsTitle = screen.getByText(/Schnellaktionen/i);
        expect(actionsTitle).toBeInTheDocument();
    });

    it('renders the mocked PageList', () => {
        render(<AdminDashboard />);
        const pageListMock = screen.getByText(/PageList Mock/i);
        expect(pageListMock).toBeInTheDocument();
    });
}); 