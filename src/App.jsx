import React, { useState } from "react";

const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`px-2 py-1 text-sm rounded ${className}`}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const tabs = [
    { key: "mentee", label: "외국인 교류 프로그램 멘티 모집" },
    { key: "mentor", label: "외국인 교류 프로그램 멘토 모집" },
    { key: "connect", label: "온라인 멘토 연결하기" },
    { key: "intro", label: "외국인 교류 프로그램 소개" },
  ];

  const handleRedirect = () => {
    if (selectedCountry) {
      window.open(`/mentor/${selectedCountry}`, '_blank');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "mentee":
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSd_29BqJt2sbDj_CSYwybUaX-OmUPN5m-O-kiclem2PAJw5Jg/viewform?usp=header", '_blank');
        return <p>멘티 신청 폼으로 이동 중...</p>;
      case "mentor":
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfjZ3nQFub_MrbprL6eHPO8W2akFccBVDA8jdDwRVec-Qe2Og/viewform?usp=header", '_blank');
        return <p>멘토 신청 폼으로 이동 중...</p>;
      case "connect":
        return (
          <div>
            <p className="mb-4">멘토 연결을 원하는 국가를 선택해주세요:</p>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border border-gray-400 rounded px-3 py-1 text-sm text-blue-900"
            >
              <option value="">-- 국가 선택 --</option>
              <option value="korea">대한민국</option>
              <option value="usa">미국</option>
              <option value="china">중국</option>
              <option value="japan">일본</option>
              <option value="vietnam">베트남</option>
              <option value="others">기타</option>
            </select>
            {selectedCountry && (
              <div className="mt-4 space-y-2">
                <p>선택된 국가: <strong>{selectedCountry}</strong></p>
                <button
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                  onClick={handleRedirect}
                >
                  연결 요청 보내기
                </button>
              </div>
            )}
          </div>
        );
      case "intro":
      default:
        return <p>한국생활에 어려움을 겪고있는 외국인 친구들을 위하여 만든 프로그램램</p>;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-6"
      style={{ 
        backgroundImage: "url('https://i.imgur.com/xH9Nucw.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        fontFamily: "'Noto Sans KR', sans-serif" 
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      <div className="flex justify-end pr-10 mt-4 mr-[200px]">
        <Button onClick={() => setShowPopup(true)} className="bg-white/10 text-gray-300 font-medium hover:bg-white/20 ml-2">
          외국인 교류 프로그램
        </Button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-blue-900/90 backdrop-blur-md rounded-lg max-w-5xl w-full mx-4 shadow-xl border border-white text-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            <div className="flex justify-between items-center px-6 py-4 rounded-t-lg border-b border-white">
              <div className="flex items-center gap-3">
                <img src="https://i.imgur.com/SOVtwDm.png" alt="CAU Logo" className="h-8" />
                <h1 className="text-xl font-bold">외국인 교류 프로그램</h1>
              </div>
              <Button onClick={() => setShowPopup(false)} className="text-white hover:text-gray-200 text-xl font-bold">
                ✕
              </Button>
            </div>
            <div className="flex justify-center flex-wrap gap-2 bg-transparent p-4 border-b border-white">
              {tabs.map((tab) => (
                <Button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-150 ${
                    activeTab === tab.key
                      ? "bg-white text-blue-900 border-white"
                      : "bg-blue-800/60 text-white border-white hover:bg-blue-800/80"
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
            <Card className="rounded-b-lg bg-white/90 text-blue-900">
              <CardContent className="p-6 min-h-[200px]">
                {renderContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
