"use client"

import type React from "react"

import { useState } from "react"
import { X, User, Building, FileText, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface NominationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NominationModal({ isOpen, onClose }: NominationModalProps) {
  const [formData, setFormData] = useState({
    nomineeName: "",
    nomineeEmail: "",
    department: "",
    position: "",
    achievements: "",
    reason: "",
    nominatorName: "",
    nominatorEmail: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Nomination submitted:", formData)
    onClose()
    // Reset form
    setFormData({
      nomineeName: "",
      nomineeEmail: "",
      department: "",
      position: "",
      achievements: "",
      reason: "",
      nominatorName: "",
      nominatorEmail: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Đề cử nhân viên xuất sắc</h2>
                <p className="text-sm text-white/80">Gửi đề cử cho chương trình GE STAR AWARD 2025</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nominee Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <User className="h-5 w-5 text-[#1e40af]" />
              <h3 className="text-lg font-semibold text-gray-900">Thông tin người được đề cử</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomineeName" className="text-sm font-medium text-gray-700">
                  Họ và tên *
                </Label>
                <Input
                  id="nomineeName"
                  name="nomineeName"
                  value={formData.nomineeName}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <Label htmlFor="nomineeEmail" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <Input
                  id="nomineeEmail"
                  name="nomineeEmail"
                  type="email"
                  value={formData.nomineeEmail}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  placeholder="email@galaxy.edu.vn"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                  Phòng ban/Trung tâm *
                </Label>
                <Input
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  placeholder="Ví dụ: Trung tâm Tuyển sinh"
                />
              </div>
              <div>
                <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                  Chức vụ
                </Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Ví dụ: Chuyên viên tuyển sinh"
                />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Building className="h-5 w-5 text-[#1e40af]" />
              <h3 className="text-lg font-semibold text-gray-900">Thành tích và đóng góp</h3>
            </div>

            <div>
              <Label htmlFor="achievements" className="text-sm font-medium text-gray-700">
                Thành tích nổi bật *
              </Label>
              <Textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                required
                rows={3}
                className="mt-1"
                placeholder="Mô tả các thành tích, kết quả công việc nổi bật..."
              />
            </div>

            <div>
              <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
                Lý do đề cử *
              </Label>
              <Textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={4}
                className="mt-1"
                placeholder="Giải thích tại sao bạn đề cử người này cho giải thưởng..."
              />
            </div>
          </div>

          {/* Nominator Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-[#1e40af]" />
              <h3 className="text-lg font-semibold text-gray-900">Thông tin người đề cử</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nominatorName" className="text-sm font-medium text-gray-700">
                  Họ và tên của bạn *
                </Label>
                <Input
                  id="nominatorName"
                  name="nominatorName"
                  value={formData.nominatorName}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              <div>
                <Label htmlFor="nominatorEmail" className="text-sm font-medium text-gray-700">
                  Email của bạn *
                </Label>
                <Input
                  id="nominatorEmail"
                  name="nominatorEmail"
                  type="email"
                  value={formData.nominatorEmail}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                  placeholder="email@galaxy.edu.vn"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Hủy bỏ
            </Button>
            <Button type="submit" className="flex-1 bg-[#f97316] hover:bg-[#ea580c] text-white">
              Gửi đề cử
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
