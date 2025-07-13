"use client";

import { useState } from 'react';
import DownloadButton from "@/components/ui/DownloadButton";

// INQA-Checkliste-Daten
const checklistData = [
  {
    id: "1",
    question: "Ist Ihr Unternehmen rechtlich selbständig?",
    explanation: "Das Unternehmen muss eine eigenständige rechtliche Einheit sein (GmbH, AG, e.V., etc.)",
    required: true
  },
  {
    id: "2", 
    question: "Hat Ihr Unternehmen seinen Sitz in Deutschland?",
    explanation: "Der Hauptsitz und die Hauptarbeitsstätte müssen sich in Deutschland befinden",
    required: true
  },
  {
    id: "3",
    question: "Besteht Ihr Unternehmen mindestens 2 Jahre am Markt?",
    explanation: "Das Unternehmen muss mindestens 2 Jahre am Markt bestehen",
    required: true
  },
  {
    id: "4",
    question: "Hat Ihr Unternehmen weniger als 250 Beschäftigte?",
    explanation: "Die Anzahl der Beschäftigten muss unter 250 liegen",
    required: true
  },
  {
    id: "5",
    question: "Hat Ihr Unternehmen einen Umsatz unter 50 Mio. € oder eine Bilanzsumme unter 43 Mio. €?",
    explanation: "Im letzten Geschäftsjahr muss entweder der Umsatz unter 50 Mio. € oder die Bilanzsumme unter 43 Mio. € liegen",
    required: true
  }
];

export default function ChecklisteInqaPage() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResult, setShowResult] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const totalQuestions = checklistData.length;
  const answeredQuestions = Object.values(answers).filter(answer => answer !== null).length;
  const allQuestionsAnswered = answeredQuestions === totalQuestions;
  const allAnswersYes = allQuestionsAnswered && Object.values(answers).every(answer => answer === true);

  const handleAnswerChange = (questionId: string, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    setShowWarning(false);
  };

  const handleEvaluate = () => {
    if (!allQuestionsAnswered) {
      setShowWarning(true);
      return;
    }
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🏆
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              INQA-Coaching
              <span className="block text-kivisai-vibrant-turquoise-light">Förderfähigkeit</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Prüfen Sie mit dieser Checkliste, ob Ihr Unternehmen für die INQA-Coaching Förderung in Frage kommt
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section style={{ padding: '3rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              color: '#1f2937', 
              marginBottom: '0.5rem'
            }}>
              Förderfähigkeitsprüfung
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
              Bitte beantworten Sie alle {totalQuestions} Fragen mit Ja oder Nein
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              Beantwortet: {answeredQuestions} von {totalQuestions} Fragen
            </p>
          </div>

          {/* Warning Message */}
          {showWarning && (
            <div style={{ 
              padding: '1rem', 
              backgroundColor: '#fef3c7', 
              border: '1px solid #f59e0b', 
              borderRadius: '0.5rem', 
              marginBottom: '2rem',
              color: '#92400e'
            }}>
              ⚠️ Bitte beantworten Sie alle Fragen, bevor Sie die Auswertung starten.
            </div>
          )}

          {/* Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            {checklistData.map((item, index) => (
              <div key={item.id} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '0.75rem', 
                padding: '1.5rem',
                backgroundColor: '#f9fafb'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    color: '#1f2937', 
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ 
                      width: '2rem', 
                      height: '2rem', 
                      backgroundColor: '#dbeafe', 
                      color: '#2563eb', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </span>
                    {item.question}
                  </h3>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontStyle: 'italic'
                  }}>
                    {item.explanation}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.id}
                      value="yes"
                      checked={answers[item.id] === true}
                      onChange={() => handleAnswerChange(item.id, true)}
                      style={{ width: '1rem', height: '1rem', accentColor: '#10b981' }}
                    />
                    <span style={{ fontWeight: '500', color: '#1f2937' }}>Ja</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name={item.id}
                      value="no"
                      checked={answers[item.id] === false}
                      onChange={() => handleAnswerChange(item.id, false)}
                      style={{ width: '1rem', height: '1rem', accentColor: '#ef4444' }}
                    />
                    <span style={{ fontWeight: '500', color: '#1f2937' }}>Nein</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Evaluation Button */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <button
              onClick={handleEvaluate}
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Auswertung starten
            </button>
          </div>

          {/* Result Section */}
          {showResult && (
            <div style={{ marginTop: '2rem' }}>
              <div style={{ 
                padding: '2rem', 
                borderRadius: '0.75rem', 
                border: '2px solid',
                borderColor: allAnswersYes ? '#10b981' : '#ef4444',
                backgroundColor: allAnswersYes ? '#f0fdf4' : '#fef2f2'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    {allAnswersYes ? (
                      <div style={{ 
                        width: '4rem', 
                        height: '4rem', 
                        backgroundColor: '#10b981', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto',
                        fontSize: '2rem',
                        color: 'white'
                      }}>
                        ✓
                      </div>
                    ) : (
                      <div style={{ 
                        width: '4rem', 
                        height: '4rem', 
                        backgroundColor: '#ef4444', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto',
                        fontSize: '2rem',
                        color: 'white'
                      }}>
                        ✗
                      </div>
                    )}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    color: allAnswersYes ? '#047857' : '#dc2626'
                  }}>
                    {allAnswersYes ? 'Glückwunsch, Sie sind förderfähig!' : 'Leider nicht förderfähig'}
                  </h3>
                  <p style={{ 
                    fontSize: '1.125rem', 
                    marginBottom: '2rem',
                    color: allAnswersYes ? '#059669' : '#dc2626',
                    lineHeight: '1.6'
                  }}>
                    {allAnswersYes 
                      ? 'Ihr Unternehmen erfüllt alle Kriterien für die INQA-Coaching Förderung! Vereinbaren Sie jetzt einen Beratungstermin.'
                      : 'Ihr Unternehmen erfüllt nicht alle Kriterien für die INQA-Coaching Förderung. Kontaktieren Sie uns für individuelle Alternativen.'
                    }
                  </p>
                  {allAnswersYes ? (
                    <a href="/termin" style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      fontWeight: '600',
                      fontSize: '1.125rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}>
                      Beratungstermin vereinbaren
                    </a>
                  ) : (
                    <a href="/kontakt" style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      fontWeight: '600',
                      fontSize: '1.125rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginBottom: '0.5rem'
                    }}>
                      KIVISAI Team kontaktieren
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 